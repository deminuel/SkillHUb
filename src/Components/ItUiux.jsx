import React, { useState } from "react";
import { FaGreaterThan, FaLessThan, FaRegCircle } from "react-icons/fa";
import {
  PiGreaterThanBold,
  PiGreaterThanLight,
  PiLessThanBold,
  PiLessThanLight,
} from "react-icons/pi";
import CrsNav from "../Utils/CrsNav";
import { RiFileListLine } from "react-icons/ri";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
  IoMdAlert,
} from "react-icons/io";
import { RxHamburgerMenu, RxTriangleDown } from "react-icons/rx";
import { VscTriangleDown } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";

const ItUiux = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const sideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  const [showTopics, setShowTopics] = useState(false);
  const topics = () => {
    setShowTopics(!showTopics);
  };

  const [showTopicsL2, setShowTopicsL2] = useState(false);
  const topicsL2 = () => {
    setShowTopicsL2(!showTopicsL2);
  };

  const subTopics = [
    {
      mainT: "Introduction to UI/UX Design",
    },
  ];

  return (
    <section className=" lg:w-full">
      <CrsNav />

      <article className="lg:flex">
        <div onClick={sideMenu}>
          {showSideMenu ? (
            <div className="text-white absolute  z-10 left-[335px] lg:left-[360px] top-6 lg:top-24 text-xl rounded-full bg-orange-300 p-1">
              <PiLessThanLight className="" />
            </div>
          ) : (
            <div>
              <div className="hidden lg:block rotate-180 ml-[75px] absolute left-[-28px] top-[90px] text-white rounded-full bg-orange-300 p-1">
                <PiLessThanLight className="" />
              </div>
              <div className="block lg:hidden text-4xl my-4 ml-5 bg-orange-300 text-white w-14 py-1 px-2">
                <RxHamburgerMenu />
              </div>
            </div>
          )}
        </div>

        {showSideMenu ? (
          <div className="w-[350px]  h-[100vh] border-r-[1px] lg:flex-[30%]">
            <div className="flex items-center gap-2 px-5 py-5 text-white bg-orange-300 relative">
              <RiFileListLine className="text-xl" />
              <h4 className="text-lg font-bold hover:cursor-pointer">
                UI/UX Design Fundamentals
              </h4>
            </div>
            {subTopics.map((p, index) => (
              <div key={index} className="px-5 py-4 text-orange-300 space-y-2">
                <div className="flex items-center gap-2">
                  <FaRegCircle className="text-lg" />
                  <p className="font-bold text-base hover:cursor-pointer">
                    {p.mainT}
                  </p>
                </div>

                <div onClick={topics}>
                  {showTopics ? (
                    <div className="flex items-center gap-1 px-4">
                      <IoIosArrowDropupCircle className="text-xl" />
                      <span className="font-bold text-sm hover:cursor-pointer">
                        2 Topics
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 px-4">
                      <IoIosArrowDropdownCircle className="text-xl" />
                      <span className="font-bold text-sm hover:cursor-pointer">
                        2 Topics
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {showTopics && (
              <div className="relative px-10 py-5 space-y-1 bg-[#ecf0f2]">
                <div>
                  <VscTriangleDown className="text-white text-2xl absolute left-9 top-[-10px]" />
                </div>
                <Link to="/UiuxExt">
                  <div className="flex items-center gap-1">
                    <FaRegCircle className="text-orange-300 bg-white rounded-full font-extrabold" />
                    <p className="font-light text-[12px] hover:cursor-pointer hover:text-orange-300">
                      Understanding Users and Design Thinking
                    </p>
                  </div>
                </Link>
                <Link to="/UiUxExt2">
                  <div className="flex items-center gap-1">
                    <FaRegCircle className="text-orange-300 bg-white rounded-full font-extrabold" />
                    <p className="font-light text-[12px] hover:cursor-pointer hover:text-orange-300">
                      Information Architecture and User Flows
                    </p>
                  </div>
                </Link>
              </div>
            )}

            <div className="px-5 py-4 space-y-2 border-b-[1px] border-t-[1px]">
              <div className="flex items-center gap-2">
                <FaRegCircle className="text-[#c0c0c1]" />
                <p className="text-base font-thin hover:cursor-pointer hover:text-orange-300">
                  Wireframing and Low-Fidelity Prototyping
                </p>
              </div>
              <div onClick={topicsL2}>
                {showTopicsL2 ? (
                  <div className="flex items-center gap-1 px-4 text-orange-300">
                    <IoIosArrowDropupCircle className="text-xl " />
                    <span className="font-bold text-sm hover:cursor-pointer">
                      2 Topics
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 px-4 text-orange-300">
                    <IoIosArrowDropdownCircle className="text-xl" />
                    <span className="font-bold text-sm hover:cursor-pointer">
                      2 Topics
                    </span>
                  </div>
                )}
              </div>
            </div>

            {showTopicsL2 && (
              <div className="relative px-10 py-5 space-y-1 bg-[#ecf0f2]">
                <div>
                  <VscTriangleDown className="text-white text-2xl absolute left-9 top-[-10px]" />
                </div>
                <Link to="/UiuxExt3">
                  <div className="flex items-center gap-1">
                    <FaRegCircle className="text-orange-300 bg-white rounded-full font-extrabold" />
                    <p className="font-light text-[12px] hover:cursor-pointer hover:text-orange-300">
                      Visual Design Principles
                    </p>
                  </div>
                </Link>
                <Link to="/UiuxExt4">
                  <div className="flex items-center gap-1">
                    <FaRegCircle className="text-orange-300 bg-white rounded-full font-extrabold" />
                    <p className="font-light text-[12px] hover:cursor-pointer hover:text-orange-300">
                      Building Interactive Prototypes
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className=" hidden lg:block border-r-[1px] h-[87vh]">
              <div className=" bg-orange-300 text-white py-7">
                <div className="w-[60px]"></div>
              </div>
            </div>
            <div className="flex lg:hidden gap-[50px] py-10 px-4 text-orange-400 font-bold text-xs">
              <div className="border-[1px] py-4 px-5 items-center ">
                <button className="flex gap-3 items-center">
                  <FaLessThan />
                  Previous Lesson
                </button>
              </div>
              <div className="border-[1px] py-4 px-5 items-center ">
                <button className="flex gap-3 items-center">
                  <FaLessThan />
                  Previous Lesson
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="lg:px-14 px-4 lg:py-7 lg:flex-[70%] w-">
          <h1 className="font-bold lg:text-[50px] text-[40px] pb-10">
            Introduction to UI/UX Design
          </h1>
          <div className="flex items-center gap-1 px-2 py-2 bg-[#ecf0f2] rounded-lg">
            <span className="hover:cursor-pointer text-orange-300 font-semibold text-xs lg:text-sm">
              UI/UX Design Fundamentals
            </span>
            <span className="hover:cursor-pointer">
              <PiGreaterThanLight className="text-[8px]" />
            </span>
            <span className="hover:cursor-pointer text-orange-300 font-semibold text-xs lg:text-sm">
              Introduction to UI/UX Design
            </span>
            {/* <span className="hover:cursor-pointer">
              <PiGreaterThanLight className="text-[8px]" />
            </span>
            <span className="hover:cursor-pointer text-orange-300 font-semibold text-xs lg:text-sm">
              HTML Elements
            </span> */}
          </div>

          {/* <div className="py-4 pl-4 pr-[20px] flex lg:flex-row flex-col items-center lg:gap-28 gap-7 justify-between rounded-lg border-2 mt-10 border-[#007991]">
            <div className="flex lg:flex-row flex-col items-center gap-2 text-[#007991]">
              <div className="rounded-full border-[3px] p-[2px] border-[#007991]">
                <IoMdAlert className="text-3xl" />
              </div>
              <p className="text-[14px] font-base text-center">
                Please go back and watch the video for the previous lesson.
              </p>
            </div>
            <button className="flex items-center lg:gap-10 gap-2 bg-yellow-300 py-[3px] lg:px-[35px] pl-4 pr-10 w-[180px] rounded-xl">
              <PiLessThanLight className="text-[10px] font-bold" />
              <span className="font-semibold text-xs">Back</span>
            </button>
          </div> */}

          <div>
            <div className="h-screen mx-22 my-8 bg-cover items-center flex justify-center bg-center bg-[url('https://i.ytimg.com/vi/HJRzUQMhJMQ/maxresdefault.jpg')]">
              <div className="w-20 h-[60px] rounded-lg bg-blue-400/90 flex justify-center items-center hover:bg-blue-500">
                <a
                  href="https://youtu.be/OpwnGiJB0wc?si=L879xSMLf9xML-yD"
                  className="text-white text-3xl"
                  target="_blank"
                >
                  <FaPlay />
                </a>
              </div>
              {/* <iframe
                           className="w-full h-full bg-transparent"
                           scr="https://youtu.be/OpwnGiJB0wc?si=L879xSMLf9xML-yD"
                           target="_blank"
                           title="Video"
                           frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         ></iframe> */}
            </div>

            <p>
              Welcome to the exciting world of UI/UX design, where creativity
              meets psychology, and aesthetics merge with functionality. This
              comprehensive introductory course will transform you from a
              curious beginner into a confident designer capable of creating
              digital experiences that delight users and drive business results.
              Learn the principles, processes, and tools that top designers use
              to craft products for millions of users worldwide.UI/UX design is
              the art and science of creating digital products that are not only
              visually stunning but also intuitive, accessible, and enjoyable to
              use. In this course, you'll explore the complete design process
              from initial research to final prototype, understanding how great
              designers think, work, and solve complex user problems. You'll
              learn to balance user needs with business goals, create designs
              that guide users effortlessly toward their objectives, and build
              interfaces that feel natural and engaging.Our project-based
              curriculum ensures you're building a professional portfolio from
              day one. You'll work on real-world design challenges, from
              redesigning existing applications to creating original product
              concepts. Each project is carefully crafted to reinforce key
              concepts while giving you creative freedom to develop your unique
              design voice.
            </p>
          </div>

          <div className="flex items-center justify-between mt-7 py-7 border-t-2">
            <Link to="/SelCss">
              <button className="bg-orange-300 flex items-center gap-5 py-[5px] px-[22px] text-white rounded-xl">
                <PiLessThanBold className="text-[10px] font-bold" />
                <span className="text-sm font-bold">Previous Lesson</span>
              </button>
            </Link>

            <Link to="/UiuxExt">
              <button className="bg-orange-300 flex items-center gap-5 py-[5px] px-[22px] text-white rounded-xl">
                <span className="text-sm font-bold">Next Topic</span>
                <PiGreaterThanBold className="text-[10px]" />
              </button>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ItUiux;
