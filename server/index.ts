import { setupApp } from "./app";
import { log } from "./vite";

(async () => {
  const { server } = await setupApp();
  
  const port = 5000;
  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
  });
})();
