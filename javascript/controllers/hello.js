import { Logger } from "zoltra";

const logger = new Logger("HelloController");

export const helloController = async (req, res) => {
  logger.info("Hello, world");
  res.status(200).json("Welcome to Zoltra");
};
