const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("./utils/db");
const cron = require("node-cron");
dotenv.config();

// server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`BackgroundServices is running on ${PORT}`);
  dbConnection();
});

// schedule task
const run = () => {
  cron.schedule("* * * * * *", () => {
    console.log("running a task every second");
  });
};
run();
