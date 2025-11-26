import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="bg-gray-200">
      <div className="relative bg-[url(https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-04-free-img.jpg)] h-[420px] lg:bg-center bg-cover rounded-br-[200px]  ">
        <div className="absolute inset-0 bg-[#007991] opacity-80 rounded-br-[200px] "></div>
        <nav className="flex justify-between p-6 items-center">
          <div className="lg: z-50 pl-0 ">
            <img
              className="lg:w-32 w-24"
              src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/logo-retina-free-img.png"
              alt=""
            />
          </div>
          <div className="z-50">
            <ul className="lg:flex space-x-8 pl-40 text-white hidden ">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/AllCourses">
                <li>All Courses</li>
              </Link>
              <Link to="/AboutPage">
                <li>About Us </li>
              </Link>
              <Link to="/instructors">
                <li>Instructors</li>
              </Link>
              <Link to="/pricingPage">
                <li>Prices & FAQ</li>
              </Link>
              <Link to="/Contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div className="z-50">
            {/* //Desktop button */}
            <Link to="/login">
              <button className="bg-orange-500 hover:bg-[#007991] transition-all duration-300 ease-in text-white rounded-3xl h-12 lg:w-48 w-[120px] font-semibold lg:flex hidden px-8 py-3 ">
                START LEARNING
              </button>
            </Link>

            {/* //Mobile Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden mr-5 flex justify-end items-end  text-white bg-orange-400"
            >
              {menuOpen ? (
                <IoClose />
              ) : (
                <GiHamburgerMenu className="p-1 text-3xl" />
              )}
            </button>
          </div>
        </nav>
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white bg-opacity-95 text-black flex flex-col items-center space-y-4 py-6 lg:hidden z-[1000] transition-all duration-300 ">
            <ul className="flex flex-col items-center space-y-4 text-lg">
              <li className="hover:text-orange-300 cursor-pointer">Home</li>
              <li className="hover:text-orange-300 cursor-pointer">
                All Courses
              </li>
              <li className="hover:text-orange-300 cursor-pointer">About Us</li>
              <li className="hover:text-orange-300 cursor-pointer">
                Instructors
              </li>
              <li className="hover:text-orange-300 cursor-pointer">
                Prices & FAQ
              </li>
              <li className="hover:text-orange-300 cursor-pointer">Contact</li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-600 transition-all text-white rounded-3xl px-6 py-2 mt-4">
              START LEARNING
            </button>
          </div>
        )}

        <div className="lg:m-16 m-0 lg:pl-20 pl-7 lg:pt:0 pt-11 flex flex-col gap-5 z-50">
          <h1 className="font-bold lg:text-8xl text-2xl text-white z-50">
            Get in Touch
          </h1>
          <p className="text-white lg:w-[500px] w-68 z-50 ">
            At the heart of our e-learning platform is a group of passionate
            educators and real industry experts who bring real-world experience
            into every lesson.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
