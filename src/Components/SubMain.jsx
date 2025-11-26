import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SubMain = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="py-20 pl-10 bg-[#ecf0f2]">
      <article className=" flex lg:flex-row flex-col mb-20">
        <div className="flex-[50%]">
          <h1 className="text-5xl w-96 font-semibold leading-[1.2]">
            Technologies You Will Learn
          </h1>
        </div>
        <div className="flex flex-[50%] gap-6 p-[40px]">
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/html5.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/css3.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/js.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/node-js.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/vuejs.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/react.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/python.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/angular.svg"
            alt=""
          />
        </div>
      </article>

      <article className="flex lg:flex-row flex-col space-y-7 mb-20">
        <div className="flex-[30%] space-y-3">
          <h5 className="font-semibold text-lg">Top Categories</h5>
          <h2 className="font-bold text-4xl">Popular Courses</h2>
        </div>
        <div className="flex-[50%] ">
          <p className="border-l-2 border-orange-400 pl-10 h-20 text-lg w-[580px]">
            Discover a wide range of top courses designed to help you master
            in-demand skills, boost your career, enhance creativity, and thrive
            in today's digital world.
          </p>
        </div>
        <div className="flex-[20%]">
          <Link to="/AllCourses">
            <button className="bg-orange-400 transition-all duration-150 ease-in hover:bg-[#007991] text-white px-6 py-2 rounded-3xl">
              VIEW ALL COURSES
            </button>
          </Link>
        </div>
      </article>

      <article
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-fit mr-10"
      >
        <div className="lg:w-[375px] w-full lg:h-[450px] h-full border-2 bg-white">
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/html.jpg"
            alt=""
          />
          <div className="px-5 py-7 space-y-5">
            <h3 className="font-semibold text-4xl">HTML5/CSS3 Essentials</h3>
            <p className="text-sm pb-4">
              Learn how to build modern, responsive websites from scratch using
              the core technologies of the web.
            </p>
            <Link to="/All">
              <button className="bg-blue-400 hover:bg-blue-600 hover:border-[1px] hover:border-gray-500 w-full px-6 py-2 rounded-lg text-white font-medium text-sm">
                See more...
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-[375px] w-full lg:h-[450px] h-full border-2 bg-white">
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/wordpress.jpg"
            alt=""
          />
          <div className="px-5 py-7 space-y-4">
            <h3 className="font-semibold text-3xl">
              UI/UX Design Fundamentals
            </h3>
            <p className="text-sm pb-2">
              Understand user-centered design, wireframing, prototyping, and
              creating beautiful, functional interfaces.
            </p>
            <Link to="/Cou2">
              <button className="bg-blue-400 hover:bg-blue-600 hover:border-[1px] hover:border-gray-500 w-full px-6 py-2 rounded-lg text-white font-medium text-sm">
                See more...
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-[375px] w-full lg:h-[450px] h-full border-2 bg-white">
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/ecommerce.jpg"
            alt=""
          />
          <div className="px-5 py-7 space-y-5">
            <h3 className="font-semibold text-4xl">Cybersecurity Essentials</h3>
            <p className="text-sm pb-4">
              Learn how to protect systems, networks, and data from cyber
              threats using industry best practices.
            </p>
            <Link to="/Cou3">
              <button className="bg-blue-400 hover:bg-blue-600 hover:border-[1px] hover:border-gray-500 w-full px-6 py-2 rounded-lg text-white font-medium text-sm">
                See more...
              </button>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SubMain;
