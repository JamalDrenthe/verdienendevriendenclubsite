import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export function serveStatic(app: express.Express) {
  // Go up one level from server/utils.ts to root, then into dist/public
  // Assuming the build output structure is:
  // /dist/public/index.html
  // /dist/server/...
  // OR if we are running from source in dev...
  
  // In the previous vite.ts, it was looking for 'public' relative to import.meta.dirname.
  // The build output in vite.config.ts is 'dist'.
  // If we run `node dist/index.js`, we are in dist.
  // If we run `tsx server/index.ts`, we are in server.
  
  // Let's look for 'dist' or 'public' carefully.
  const distPath = path.resolve(__dirname, "..", "dist");
  const publicPath = path.resolve(distPath, "public"); // Vite build puts assets in dist/public if configured? 
  // Wait, vite.config.ts output was changed to "dist" in previous turn.
  // "outDir: path.resolve(import.meta.dirname, "dist"),"
  // So the static files are in "dist".
  
  // If we are in 'server/utils.ts' (source), dist is '../dist'.
  
  if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.use("*", (_req, res) => {
        const indexPath = path.resolve(distPath, "index.html");
        if (fs.existsSync(indexPath)) {
            res.sendFile(indexPath);
        } else {
            res.status(404).send("Index file not found");
        }
      });
  }
}
