import { App, Logger } from "zoltra";

const logger = new Logger("Server");

async function startServer() {
  try {
    const app = new App();
    await app.start();
  } catch (error) {
    logger.error("Failed to start server", { ...error as Error });
    process.exit(1);
  }
}

startServer();
