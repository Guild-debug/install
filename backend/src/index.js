require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Service Request Schema
const serviceRequestSchema = new mongoose.Schema({
  name: String,
  service: String,
  location: String,
  date: String,
});

const ServiceRequest = mongoose.model("ServiceRequest", serviceRequestSchema);

// API Routes
app.post("/service-request", async (req, res) => {
  try {
    const newRequest = new ServiceRequest(req.body);
    await newRequest.save();
    res.status(201).json({ message: "Service request submitted!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit request" });
  }
});

app.get("/", (req, res) => res.send("API is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
