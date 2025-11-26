import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="flex items-center justify-between pb-8">
        <div className="z-10">
          <Link to="/">
            <img
              src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/logo-retina-free-img.png"
              alt="logo"
              className="w-44 my-7 mx-6"
            />
          </Link>
        </div>

        <div className="flex items-center gap-10 mx-8 z-10">
          <ul className="text-white text-base lg:flex gap-5 hidden">
            <Link to="/">
              <li className="hover:cursor-pointer">Home</li>
            </Link>
            <Link to="/AllCourses">
              <li className="hover:cursor-pointer">All Courses</li>
            </Link>
            <Link to="/about">
              <li className="hover:cursor-pointer">About Us</li>
            </Link>
            <Link to="/instructors">
              <li className="hover:cursor-pointer">Instructors</li>
            </Link>
            <Link to="/pricingPage">
              <li className="hover:cursor-pointer">Pricing & FAQ</li>
            </Link>
            <Link to="/Contact">
              <li className="hover:cursor-pointer">Contact</li>
            </Link>
          </ul>
          <Link to="/login">
            <button className="text-white lg:flex hidden bg-orange-400 transition-all duration-150 ease-in hover:bg-[#007991] px-5 py-2 font-semibold rounded-3xl">
              START LEARNING
            </button>
          </Link>
          <button className="lg:hidden bg-orange-400 Block p-2">
            <IoMdMenu className="text-white w-14 h-12 hover:bg-#007991" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
