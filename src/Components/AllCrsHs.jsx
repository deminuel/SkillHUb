import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const AllCrsHs = () => {
  return (
    <section className="bg-[#ecf0f2]">
      <article className="relative rounded-br-[150px] lg:h-[72vh] h-[55vh] bg-fixed bg-cover bg-center bg-[url('https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-08-free-img.jpg')] ">
        <div className="absolute bg-[#007991] inset-0 opacity-85 rounded-br-[150px]"></div>
        <nav className="flex items-center justify-between mt-[-10px]">
          <div className="z-10">
            <Link to="/">
              <img
                src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/logo-retina-free-img.png"
                alt="logo"
                className="lg:w-44 w-32 my-7 mx-10 "
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

            <button className="text-white lg:flex hidden bg-orange-400 transition-all duration-150 ease-in hover:bg-[#007991] px-5 py-2 font-semibold rounded-3xl">
              START LEARNING
            </button>
            <button className="lg:hidden bg-orange-400 Block p-1">
              <IoMdMenu className="text-white w-12 h-8 hover:bg-#007991" />
            </button>
          </div>
        </nav>
        <div className="flex flex-col mx-10 space-y-2 w-[600px]">
          <h3 className="text-white z-10 pt-20 font-bold text-[70px]">
            All Courses
          </h3>
          <p className="z-10 text-white w-[580px] font-normal text-base">
            Unlock your potential with expert-led tech courses designed to help
            you master coding, design, data science, and other in-demand digital
            skills.
          </p>
        </div>
      </article>
    </section>
  );
};

export default AllCrsHs;
