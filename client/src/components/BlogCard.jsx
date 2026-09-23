import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3">
          {blog.title}
        </h2>

        <p className="text-gray-600 mb-4">
          {blog.description}
        </p>

        <Link
          to={`/blogs/${blog._id}`}
          className="text-blue-600 font-semibold"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;