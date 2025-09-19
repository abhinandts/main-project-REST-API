import { createServer } from "./server.js";
import config from "./config/env.js";
import connectDB from "./config/database.js";

(async () => {
  const server = createServer();

  await connectDB();

  server.listen(config.port, () => {
    console.log(`running on port ${config.port}`);
  });
})();
