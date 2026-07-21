require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const auditRoutes = require("./routes/auditRoutes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/audit", auditRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "System Audit Log Dashboard API is running...",
  });
});

module.exports = app;