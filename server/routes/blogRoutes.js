const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.get("/", getBlogs);

router.post("/", protect, createBlog);

router.get("/:id", getBlogById);

router.put("/:id", protect, updateBlog);

router.delete("/:id", protect, deleteBlog);

module.exports = router;