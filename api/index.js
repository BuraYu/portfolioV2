const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));


const chatSchema = new mongoose.Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Chat = mongoose.model("Chat", chatSchema);

app.post("/api/messages", async (req, res) => {
  const { username, message } = req.body;

  try {
    const newMessage = new Chat({ username, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: message });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to save message" });
  }
});

app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Chat.find().sort({ timestamp: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch messages" });
  }
});

const { createServer } = require("http");
module.exports = createServer(app);
