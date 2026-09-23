import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs, deleteBlog } from "../api/blogApi";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteBlog(id);

      setBlogs(
        blogs.filter((blog) => blog._id !== id)
      );

      alert("Blog deleted successfully");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to delete blog"
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              Admin Dashboard
            </h1>

            <p className="text-gray-600 mt-2">
              Manage your construction blogs.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/admin/blogs/create")}
              className="bg-black text-white px-5 py-3 rounded-lg"
            >
              Create Blog
            </button>

            <button
              onClick={handleLogout}
              className="border border-red-500 text-red-500 px-5 py-3 rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold">
              Blogs
            </h2>

            <p className="text-gray-600 mt-1">
              Total blogs: {blogs.length}
            </p>
          </div>

          <div className="divide-y">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="p-6 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mt-1">
                    {blog.description}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      navigate(`/admin/blogs/edit/${blog._id}`)
                    }
                    className="border px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {blogs.length === 0 && (
              <p className="p-6 text-gray-500">
                No blogs found.
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
