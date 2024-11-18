const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());

const dummyData = {
  message: "Project 1 is running on Backend",
  timestamp: new Date(),
};

app.get("/api/data", (req, res) => {
  res.json(dummyData);
});

app.listen(PORT, () => {
  console.log(`Project 1 backend running on http://localhost:${PORT}`);
});
