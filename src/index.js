import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const runningPort = process.env.PORT || 8000;
connectDB()
  .then(() => {
    app.on("error", (e) => {
      console.error("ERRR: ", e);
      throw e;
    });
    app.listen(runningPort, () => {
      console.log(`Server is running at port: ${runningPort}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed!", err);
  });
