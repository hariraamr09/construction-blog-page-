const Blog = require("../models/Blog");


const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.json(blogs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get blogs",
      error: error.message,
    });
  }
};

const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create blog",
      error: error.message,
    });
  }
};


const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get blog",
      error: error.message,
    });
  }
};


const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update blog",
      error: error.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete blog",
      error: error.message,
    });
  }
};

module.exports = {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};