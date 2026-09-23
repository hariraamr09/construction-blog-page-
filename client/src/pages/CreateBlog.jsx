import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../api/blogApi";

const CreateBlog = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createBlog({
        title,
        description,
        content,
        image,
      });

      alert("Blog created successfully");

      navigate("/admin/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to create blog"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">

        <h1 className="text-3xl font-bold mb-8">
          Create Blog
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>
            <label className="block mb-2 font-medium">
              Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Enter blog title"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="w-full border rounded-lg px-4 py-3"
              rows="3"
              placeholder="Enter short description"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Content
            </label>

            <textarea
              value={content}
              onChange={(e) =>
                setContent(e.target.value)
              }
              className="w-full border rounded-lg px-4 py-3"
              rows="8"
              placeholder="Write your blog content"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Image URL
            </label>

            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <div className="flex gap-4">

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold"
            >
              Create Blog
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              className="border px-6 py-3 rounded-lg"
            >
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateBlog;