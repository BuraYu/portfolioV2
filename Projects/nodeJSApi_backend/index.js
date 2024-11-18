const express = require("express");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello from your Node.js backend!",
    timestamp: new Date(),
  });
});

module.exports = app;
