require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Construction Blog API is running");
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "API is working",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});