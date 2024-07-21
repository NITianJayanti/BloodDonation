const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth");
module.exports = app;

// cors
app.use(cors());

// json
app.use(express.json());

// routes
app.use("/api/v1/auth", authRoute);
