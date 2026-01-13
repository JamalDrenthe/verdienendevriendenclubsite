import express from "express";
import { registerRoutes } from "./routes";
import { serveStatic, log } from "./utils";
import { setupVite } from "./vite";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

let serverInitialized = false;

export async function setupApp() {
  if (serverInitialized) return app;

  const server = await registerRoutes(app);

  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // In development, setup Vite
  // In production on Vercel, we don't use this serveStatic usually, 
  // but if we are running as a standalone node app, we do.
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // Check if we are in a serverless environment (Vercel)
    // Vercel sets specific env vars, but generally we want to avoid serveStatic 
    // if we are letting Vercel handle static files. 
    // However, keeping it doesn't hurt if Vercel routing handles static first.
    // But to be safe, let's wrap it.
    if (process.env.VERCEL !== "1") {
       serveStatic(app);
    }
  }
  
  serverInitialized = true;
  return { app, server };
}
