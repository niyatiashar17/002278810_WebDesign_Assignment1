// server.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors("*"));
// Import routes
const userRoutes = require("./userRoutes");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/assignment8DB", {
  useNewUrlParser: true,
});

// Use routes
app.use("/user", userRoutes);

const PORT = 10000;
app.listen(PORT, () => {
  console.log(`Backend server started at port ${PORT}`);
});
