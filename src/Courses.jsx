import React from "react";

const Courses = () => {
  return (
    <section className="font-sans">
      {/* ===== NAVBAR ===== */}
      <nav className="flex justify-between items-center px-10 py-6 bg-gradient-to-r bg-[#007991] text-white">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/logo-retina.png"
            alt="Logo"
            className="w-30 h-10 text-white"
          />
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">All Courses</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Instructors</li>
          <li className="cursor-pointer">Pricing & FAQ</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* Right: Button */}
        <button className="bg-orange-400 hover:bg-[#025465] text-white px-5 py-2 rounded-md font-medium">
          START LEARNING
        </button>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[70vh] flex flex-col justify-center px-10 bg-gradient-to-r bg-[#007991] text-white overflow-hidden rounded-br-[80px]">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1526378721351-6e6b40e6f3d0?q=80&w=1600&auto=format&fit=crop"
          alt="Courses background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#007991] opacity-70 -z-10"></div>

        {/* Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            All Courses
          </h1>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>

      {/* ===== COURSE PROGRAM SECTION ===== */}
      <section className="bg-gray-100 py-12 px-6 md:px-16">
        {/* Header Section */}
        <p className="text-sm uppercase text-black-500 font-semibold">
          Course Program
        </p>
        <div className=" mt-5 flex items-center justify-between gap-4 max-w-6xl mx-auto mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-15xl font-bold text-gray-800 mb-2">
            Popular Courses
          </h2>
          <div className="w-[2px] h-16 bg-orange-500"></div>
          <p className="text-gray-600 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.{" "}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className=" mt-20 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
            <img
              src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/html.jpg"
              alt="HTML5/CSS3 Essentials"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-5xl font-semibold text-gray-800 mb-2">
                HTML5/CSS3 Essentials
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className=" rounded-md mt-6 w-full bg-blue-500 text-white px-5 py-2 hover:bg-blue-600 transition">
                See more...
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="mt-20 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
            <img
              src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/wordpress.jpg"
              alt="WordPress Basic Tutorial"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-5xl font-semibold text-gray-800 mb-2">
                WordPress Basic Tutorial
              </h3>
              <p className="text-gray-600 mb-4">
                Repellat perspiciatis cum! Doloremque ea viverra.
              </p>
              <button className="w-full bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition">
                See more...
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="mt-20 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
            <img
              src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/ecommerce.jpg"
              alt="E-Commerce Course"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-5xl font-semibold text-gray-800 mb-2">
                E-Commerce Course
              </h3>
              <p className="text-gray-600 mb-4">
                Ut ullamcorper viverra neque a porttitor.
              </p>
              <button className="rounded-md mt-6 w-full bg-blue-500 text-white px-5 py-2 hover:bg-blue-600 transition">
                See more...
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      {/* ======= Newsletter Section ======= */}
      <section className="relative z-10 -mt-10 py-20 rounded-t-3xl shadow-lg bg-gray-100 h-[400px] text-center px-6">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Join Our Community
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Enter your email address to register to our newsletter subscription
          delivered on regular basis!
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition"
          >
            SUBSCRIBE
          </button>
        </form>
      </section>

      {/* ======= Footer Section ======= */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/logo-retina.png"
                alt="Logo"
                className="w-50 h-20"
              />
              <div></div>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 text-gray-600">
              <a href="#" className="hover:text-teal-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-teal-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-teal-600">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#" className="hover:text-teal-600">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Popular Courses
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-teal-600 cursor-pointer">
                LMS Interactive Content
              </li>
              <li className="hover:text-teal-600 cursor-pointer">
                Become a PHP Master
              </li>
              <li className="hover:text-teal-600 cursor-pointer">
                HTML5/CSS3 Essentials
              </li>
              <li className="hover:text-teal-600 cursor-pointer">
                JavaScript Development
              </li>
              <li className="hover:text-teal-600 cursor-pointer">
                WordPress Basic Tutorial
              </li>
              <li className="hover:text-teal-600 cursor-pointer">
                Introduction to Coding
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2 text-black-600">
              <li>
                <span className="font-bold">Address:</span>
              </li>
              <p>123 Fifth Avenue, New York, NY 10160</p>
              <li>
                <span className="font-bold">Phone:</span>
              </li>
              <p>929-242-6868</p>
              <li>
                <span className="font-bold">Email:</span>
              </li>
              <p> contact@info.com</p>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className=" flex justify-between items-center border-t border-gray-200 mt-10 pt-6 text-left text-gray-500 text-m">
          {" "}
          Copyright © {new Date().getFullYear()} Online Courses.
          <span className="flex justify-end text-gray-500 text-m">
            Powered by Online Courses
          </span>
        </div>
      </footer>
    </section>
  );
};
export default Courses;
