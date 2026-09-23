import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { getBlogs } from "../api/blogApi";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setError("Unable to load blogs.");
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Our Blogs
        </h1>

        <Link
          to="/admin/login"
          className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Admin Login
        </Link>

      </div>

      {error && (
        <p className="text-red-500 mb-6">
          {error}
        </p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            blog={blog}
          />
        ))}
      </div>

      {blogs.length === 0 && !error && (
        <p className="text-gray-500">
          No blogs found.
        </p>
      )}

    </div>
  );
};

export default Blogs;
