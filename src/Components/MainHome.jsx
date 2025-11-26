import Aos from "aos";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { useUser } from "../context/UserContext";

const MainHome = () => {
  const { user } = useUser();

  useEffect(() => {
    Aos.init({ duration: 300, once: true });
  }, []);

  const [showMobileNav, setShowMobileNav] = useState(false);

  const mobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <section className="bg-[#ecf0f2]">
      <article className="relative rounded-br-[150px] lg:h-[110vh] h-[90vh] bg-[url('https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-01-free-img.jpg')] bg-fixed bg-cover bg-center">
        <div className="absolute bg-[#007991] inset-0 opacity-85 rounded-br-[150px]"></div>
        <nav className="flex items-center justify-between">
          <div className="z-10">
            <Link to="/">
              <img
                src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/logo-retina-free-img.png"
                alt="logo"
                className="w-44 my-7 mx-10"
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
            {!user && (
              <Link to="/login">
                <button className="text-white lg:flex hidden bg-orange-400 transition-all duration-150 ease-in hover:bg-[#007991] px-5 py-2 font-semibold rounded-3xl">
                  START LEARNING
                </button>
              </Link>
            )}

            <div className="lg:hidden bg-[#ff9635] p-2">
              {showMobileNav ? (
                <MdClose
                  data-aos="fade-in"
                  data-aos-duration="200"
                  onClick={mobileNav}
                  className="text-white text-xl"
                />
              ) : (
                <button
                  onClick={mobileNav}
                  className="lg:hidden bg-orange-400 Block p-2"
                >
                  <IoMdMenu className="text-white w-14 h-12 hover:bg-#007991" />
                </button>
              )}
            </div>
          </div>
        </nav>

        <div className="mx-10 lg:my-28 my-16 space-y-3">
          <div className="flex items-center gap-2">
            <div className="bg-orange-400 hover:bg-[#007991] z-10 hover:cursor-pointer flex items-center justify-center rounded-full w-4 h-4">
              <FaPlay className="text-xs text-[#007991] hover:text-orange-400 p-[2px]" />
            </div>
            <p className="text-white hover:cursor-pointer z-10 text-base font-thin">
              ON-DEMAND VIDEO TRAINIG
            </p>
          </div>
          <div className="flex">
            <h3 className="text-white z-10 font-bold text-[60px] leading-[1.2] ">
              <Typewriter
                words={[
                  "Education Opens up the Mind",
                  "Shaping thinkers, and future leaders",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={90}
                delaySpeed={4000}
              />
            </h3>
          </div>

          <div className="flex flex-col py-10 space-y-10">
            <p className="z-10 text-white w-[580px] font-normal text-lg">
              Explore top courses that teach today's most in-demand skills for
              career growth, creativity and digital innovation.
            </p>
            <div className="flex items-center flex-row gap-10 z-10">
              {user && (
                <Link to="/dashboard/overview">
                  <button className="text-white uppercase bg-orange-400 transition-all duration-150 ease-in hover:bg-[#007991] py-2 px-7 rounded-3xl text-base font-semibold">
                    View My Progress
                  </button>
                </Link>
              )}
              <div className="flex items-center gap-2 text-white text-base font-semibold hover:text-orange-400 hover:cursor-pointer">
                <FaPlay className="text-sm p-[2px]" />
                <Link to="/AllCourses">
                  <p>ALL COURSES</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

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
      </article>
    </section>
  );
};

export default MainHome;
