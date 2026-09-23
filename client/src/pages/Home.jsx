import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../api/blogApi";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className="bg-white text-gray-900">


      <section
        id="home"
        className="min-h-[85vh] bg-gray-950 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:px-8">
          <div className="max-w-4xl">

            <p className="text-orange-500 font-semibold uppercase tracking-[0.25em]">
              Construction & Infrastructure</p>

            <h1 className="mt-5 text-5xl md:text-7xl font-bold leading-tight">
              Building the Future
              <span className="block text-orange-500">With Precision.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
              We deliver reliable construction solutions designed
              around quality, safety, innovation and long-term value.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a href="#contact"
                className="bg-orange-500 text-black px-7 py-4 font-semibold hover:bg-orange-400 transition">
                  Get a Quote</a>

              <a href="#projects"
                className="border border-white px-7 py-4 font-semibold hover:bg-white hover:text-black transition"
              >View Projects</a>

            </div>

          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-widest">About Us</p>

              <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                Building more than structures.
              </h2>
            </div>

            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are a construction company focused on delivering
                high-quality residential, commercial and infrastructure
                projects.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mt-5">
                Our experienced team combines modern construction
                techniques, careful planning and professional project
                management to create spaces that are built to last.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-10">

                <div>
                  <p className="text-3xl font-bold text-orange-500">10+</p>
                  <p className="text-gray-600 mt-1">Years Experience</p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-orange-500"> 50+</p>
                  <p className="text-gray-600 mt-1">Projects</p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-orange-500">100%</p>
                  <p className="text-gray-600 mt-1">Commitment</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>


      <section id="services" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-orange-500 font-semibold uppercase tracking-widest">What We Do</p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Our Services
            </h2>

            <p className="mt-5 text-gray-600 text-lg">
              Professional construction services built around your
              project's requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            <div className="bg-white p-8 shadow-sm hover:shadow-md transition">
              <div className="text-orange-500 text-3xl mb-5">
                01
              </div>

              <h3 className="text-2xl font-bold">
                Building Construction
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Complete construction solutions for residential
                and commercial buildings.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm hover:shadow-md transition">
              <div className="text-orange-500 text-3xl mb-5">
                02
              </div>

              <h3 className="text-2xl font-bold">
                Commercial Projects
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Efficient construction solutions for offices,
                retail spaces and commercial developments.</p>
            </div>

            <div className="bg-white p-8 shadow-sm hover:shadow-md transition">
              <div className="text-orange-500 text-3xl mb-5">
                03
              </div>

              <h3 className="text-2xl font-bold">
                Renovation
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Modern renovation services that improve the
                functionality and appearance of existing spaces.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm hover:shadow-md transition">
              <div className="text-orange-500 text-3xl mb-5">
                04
              </div>

              <h3 className="text-2xl font-bold">
                Infrastructure
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Reliable civil and infrastructure construction
                delivered with attention to quality.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm hover:shadow-md transition">
              <div className="text-orange-500 text-3xl mb-5">05</div>

              <h3 className="text-2xl font-bold">Project Management</h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Professional planning and project management
                from concept through completion.</p>
            </div>

            <div className="bg-white p-8 shadow-sm hover:shadow-md transition">
              <div className="text-orange-500 text-3xl mb-5">06</div>

              <h3 className="text-2xl font-bold">
                Construction Consulting</h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Practical construction advice to help you make
                informed project decisions.</p>
            </div>

          </div>

        </div>
      </section>


      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5">

            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-widest">Our Work</p>

              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Featured Projects</h2>
            </div>

            <p className="max-w-xl text-gray-600">
              A selection of projects that demonstrate our commitment
              to quality construction and professional delivery.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            <div className="group overflow-hidden bg-gray-900">
              <div className="h-80 bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>

              <div className="p-6 text-white">
                <p className="text-orange-500 text-sm">Commercial</p>
                <h3 className="text-xl font-bold mt-2">Modern Commercial Complex</h3>
              </div>
            </div>

            <div className="group overflow-hidden bg-gray-900">
              <div className="h-80 bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>

              <div className="p-6 text-white">
                <p className="text-orange-500 text-sm">Residential</p>

                <h3 className="text-xl font-bold mt-2">Contemporary Residence</h3>
              </div>
            </div>

            <div className="group overflow-hidden bg-gray-900">
              <div className="h-80 bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>

              <div className="p-6 text-white">
                <p className="text-orange-500 text-sm">Infrastructure</p>

                <h3 className="text-xl font-bold mt-2">Infrastructure Development</h3>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section id="blogs" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5">
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-widest">Latest News</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">From Our Blog</h2>

              <p className="mt-5 text-gray-600">Construction insights, industry news and company updates.</p>
            </div>

            <Link to="/blogs" className="text-orange-500 font-semibold hover:text-orange-600">
              View All Blogs →</Link>

          </div>

          {blogs.length > 0 ? (

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

              {blogs.slice(0, 3).map((blog) => (

                <article
                  key={blog._id}
                  className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition">

                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-56 object-cover"/>
                  )}

                  <div className="p-6">

                    <h3 className="text-2xl font-bold">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {blog.description}
                    </p>

                    <Link to={`/blogs/${blog._id}`}
                      className="inline-block mt-6 text-orange-500 font-semibold hover:text-orange-600">
                      Read More → </Link>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="mt-12 bg-white p-10 text-center">
              <p className="text-gray-500">No blogs available yet.</p>
            </div>

          )}

        </div>
      </section>

      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-orange-500 font-semibold uppercase tracking-widest">Client Feedback</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">What Our Clients Say</h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="border p-8">
              <p className="text-gray-600 leading-relaxed">
                "The team maintained excellent communication throughout
                the project and delivered quality work."
              </p>

              <h3 className="font-bold mt-6">Client Name</h3>
              <p className="text-gray-500 text-sm">Residential Project</p>
            </div>

            <div className="border p-8">
              <p className="text-gray-600 leading-relaxed">
                "Professional, reliable and committed to delivering
                the project according to our requirements."
              </p>

              <h3 className="font-bold mt-6">Client Name</h3>
              <p className="text-gray-500 text-sm">Commercial Project</p>
            </div>

            <div className="border p-8">
              <p className="text-gray-600 leading-relaxed">
                "We were impressed with the quality of work and
                attention to detail."
              </p>

              <h3 className="font-bold mt-6">Client Name</h3>

              <p className="text-gray-500 text-sm">Infrastructure Project</p>
            </div>
          </div>

        </div>
      </section>

      <section id="contact" className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16">

            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-widest">Contact Us</p>

              <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                Let's build something together.</h2>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                Have a construction project in mind?
                Get in touch with our team to discuss your requirements.
              </p>

              <div className="mt-8 space-y-4 text-gray-300">
                <p><span className="font-semibold text-white">Phone:
                    </span>{" "}+91 XXXXX XXXXX</p>

                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  info@yourcompany.com</p>

                <p>
                  <span className="font-semibold text-white">Location:</span>{" "}
                  Your City, India</p>
              </div>
            </div>

            <div className="bg-white p-8 text-gray-900">
              <h3 className="text-2xl font-bold">Request a Quote</h3>

              <form className="mt-6 space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"/>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"/>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"/>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project"
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"/>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-black py-4 font-semibold hover:bg-orange-400 transition">
                  Send Enquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
