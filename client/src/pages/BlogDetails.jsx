import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../api/blogApi";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await getBlogById(id);

      setBlog(data);
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p className="p-8">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <h1 className="text-4xl font-bold mb-4">
        {blog.title}
      </h1>

      <p className="text-gray-600 text-lg mb-8">
        {blog.description}
      </p>

      <div className="text-gray-800 leading-8">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetails;