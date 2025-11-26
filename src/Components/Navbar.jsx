import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { user } = useUser();

  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  const [showMobileNav, setShowMobileNav] = useState(false);

  const mobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <section>
      <section
        style={{ borderBottomRightRadius: "150px" }}
        className='relative bg-[url("https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2021/03/bg-07-free-img.jpg")] lg:h-[430px] bg-center bg-cover'
      >
        <div
          style={{ borderBottomRightRadius: "150px" }}
          className="absolute inset-0 bg-[#007991] opacity-85"
        ></div>

        <div className="relative z-50 flex items-center justify-between lg:px-[78px] px-6 py-4">
          <img
            width={150}
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/logo-regular-free-img.png"
            alt="alt"
          />

          <div className="lg:hidden bg-[#ff9635] p-2">
            {showMobileNav ? (
              <MdClose
                data-aos="fade-in"
                data-aos-duration="200"
                onClick={mobileNav}
                className="text-white text-xl"
              />
            ) : (
              <GiHamburgerMenu
                onClick={mobileNav}
                className="text-white text-xl"
              />
            )}
          </div>

          <div className="lg:flex items-center gap-10 text-white hidden">
            <ul className="font-[Roboto] flex gap-6">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/AllCourses">
                <li>All Courses</li>
              </Link>
              <Link to="/aboutPage">
                <li>About Us</li>
              </Link>
              <Link to="/instructors">
                <li>Instructors</li>
              </Link>
              <Link to="/pricingPage">
                <li>Pricing & FAQ</li>
              </Link>
              <Link to="/Contact">
                <li>Contact</li>
              </Link>
            </ul>
            {user && (
              <Link to="/login">
                <button className="px-5 py-2 font-[poppins] font-semibold tracking-wider w-[200px] bg-[#ff9635] transition-all duration-150 ease-in rounded-full hover:bg-[#007991]">
                  START LEARNING
                </button>
              </Link>
            )}
          </div>
        </div>

        <div className="relative z-50 lg:px-[78px] px-6 lg:pt-24 pt-10 pb-20 lg:pb-0 text-white">
          <h1 className="lg:text-[75px] text-[40px] font-[poppins] font-semibold">
            About Us
          </h1>
          <p className="text-[14px] lg:text-[18px]">
            We empower you to code, build, and launch. Learn software
            development with hands-on <br className="lg:block hidden" />
            projects and expert guidance. Shape the digital future.
          </p>
        </div>
      </section>

      {/* MobileNav */}

      {showMobileNav && (
        <section
          data-aos="fade-right"
          data-aos-duration="600"
          className="lg:hidden absolute top-16 z-50 px-6 bg-white w-full h-[305px]"
        >
          <div className="relative flex flex-col gap-3 pt-[18px]">
            <Link to="/">
              <p>Home</p>
            </Link>
            <span className="border-b-[1px] border-black/15"></span>
            <Link to="/AllCourses">
              <p>All Courses</p>
            </Link>
            <span className="border-b-[1px] border-black/15"></span>
            <Link to="/about">
              <p>About Us</p>
            </Link>
            <span className="border-b-[1px] border-black/15"></span>
            <Link to="/instructors">
              <p>Instructors</p>
            </Link>
            <span className="border-b-[1px] border-black/15"></span>
            <Link to="/pricingPage">
              <p>Pricing & FAQ</p>
            </Link>
            <span className="border-b-[1px] border-black/15"></span>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </div>
        </section>
      )}
    </section>
  );
};

export default Navbar;
