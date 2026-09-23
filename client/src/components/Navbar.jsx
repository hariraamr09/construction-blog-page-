import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" w-full  bg-black" >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          BUILD<span className="text-orange-500">ing</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-sm text-white transition hover:text-orange-500"
          >
            Home
          </Link>

          <a href="/#about"
            className="text-sm text-gray-300 transition hover:text-orange-500"
          >
            About
          </a>

          <Link
            to="/blogs"
            className="text-sm text-gray-300 transition hover:text-orange-500"
          >
            News & Blogs
          </Link>

          <a
            href="/#projects"
            className="text-sm text-gray-300 transition hover:text-orange-500"
          >
            Projects
          </a>

          <a
            href="/#testimonials"
            className="text-sm text-gray-300 transition hover:text-orange-500"
          >
            Testimonials
          </a>

          <a
            href="/#contact"
            className="text-sm text-gray-300 transition hover:text-orange-500"
          >
            Contact
          </a>

        </div>

        {/* CTA */}
        <a
          href="/#contact"
          className="hidden bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400 md:block"
        >
          Get a Quote
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
