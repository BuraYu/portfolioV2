const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());

const dummyData = {
  message: "Project 1 is running on Backend",
  timestamp: new Date(),
};

app.get("/", (req, res) => {
  res.status(200).json(dummyData);
});

app.listen(PORT, () => {
  console.log(
    `Project 1 backend running on https://node-js-comp-proj-whgc.vercel.app/${PORT}`
  );
});

module.exports = app;
