import React, { useState } from "react";
import EmailSecH from "./EmailSecH";
import { FaChevronCircleDown, FaRegCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp, IoMdMenu } from "react-icons/io";
import HackFooter from "./HackFooter";
import NavList from "../Utils/NavList";
import { VscTriangleDown } from "react-icons/vsc";
import { BiRadioCircle } from "react-icons/bi";
import { RiFileListLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Courses2A = () => {
  const [showAllSub, setShowAllSub] = useState(false);
  const allSub = () => {
    setShowAllSub(!showAllSub);
    setShowSubCourses(!showSubCourses);
    setShowSubCourses2(!showSubCourses2);
  };

  const [showSubCourses, setShowSubCourses] = useState(false);
  const subCourses = () => {
    setShowSubCourses(!showSubCourses);
  };

  const [showSubCourses2, setShowSubCourses2] = useState(false);
  const subCourses2 = () => {
    setShowSubCourses2(!showSubCourses2);
  };
  return (
    <section className="bg-[#ecf0f2]">
      <nav className="bg-white flex justify-between items-center px-10 py-5">
        <div>
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/logo-retina.png"
            alt=""
            className="w-44"
          />
        </div>
        <div className="flex gap-6 items-center">
          <ul className="lg:flex gap-6 text-lg text-orange-400 hidden">
            <NavList />
          </ul>
          <Link to="/login">
            <button className="text-white lg:flex hidden bg-orange-400 hover:bg-[#007991] px-5 py-2 font-semibold rounded-3xl">
              START LEARNING
            </button>
          </Link>
          <button className="lg:hidden bg-orange-400 Block p-[3px]">
            <IoMdMenu className="text-white w-10 h-8 hover:bg-#007991" />
          </button>
        </div>
      </nav>
      <article className="bg-white w-fit lg:mx-10 mx-7 my-14 lg:pl-[78px] px-5 lg:pr-12 py-14">
        <div className="">
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/wordpress.jpg"
            alt=""
            className=""
          />
          <h4 className="font-bold text-2xl pt-5">UI/UX Design Fundamentals</h4>
          <h4 className="font-semibold text-xl pt-2 pb-5">
            UI/UX Fundamentals- Designing Intuitive and Engaging Digital
            Experiences.
          </h4>
          <h2 className="font-bold text-3xl py-5">Course Description</h2>
          <p>
            This course introduces you to the core principles of User Interface
            (UI) and User Experience (UX) design- the foundation of creating
            websites and apps that are not only beautiful but also intuitive,
            functional, and user-centered. Through a mix of theory, hands-on
            exercises, and real-world case studies, youll learn how to research,
            design, and prototype digital products that solve real problems and
            delight users.
          </p>
          <h4 className="font-bold text-2xl py-5">
            Key Concepts Covered Include:
          </h4>
          <ul className="list-disc list-inside px-6 pb-6">
            <li>
              Understand the difference and relationship between UI and UX
              design.
            </li>
            <li>
              Apply UX research methods such as user personas, user journeys,
              and wireframing.
            </li>
            <li>
              Create effective UI layouts using visual hierarchy, typography,
              and color theory.
            </li>
            <li>
              Design wireframes and interactive prototypes using popular tools
              (e.g Figma or Adobe XD).
            </li>
            <li>
              Conduct usability testing and apply user feedback improvement.
            </li>
          </ul>
          <p>
            After completing this course, you'll have a strong foundation in UI
            and UX design principles, a professional design workflow, and a
            portfolio-ready project showcasing your skills in user-centered
            digital design.
          </p>
        </div>

        <div className="flex gap-2 lg:flex-row flex-col justify-between pt-[40px] pb-10">
          <h3 className="font-semibold text-center lg:text-3xl text-2xl">
            Course Content
          </h3>

          <div onClick={allSub} className="flex justify-center">
            {showAllSub ? (
              <button className=" text-white justify-center flex items-center gap-2 bg-[#ffab5e] hover:bg-orange-400 text-[12px] px-5 py-3 font-semibold rounded-3xl w-full">
                <IoIosArrowDown />
                Collapse All
              </button>
            ) : (
              <button className=" text-white justify-center flex items-center gap-2 bg-[#ffab5e] hover:bg-orange-400 text-[12px] px-5 py-3 font-semibold rounded-3xl w-full">
                <IoIosArrowUp />
                Expand All
              </button>
            )}
          </div>
        </div>
        <div className="space-y-5">
          <div className="border-2 rounded-lg">
            <div className="flex lg:flex-row flex-col px-6 pt-6 pb-4 justify-between ">
              <div className="flex items-center gap-1">
                <FaRegCircle className="text-gray-300 text-xl " />
                <div className="pt-2 text-base hover:cursor-pointer hover:text-[#ffab5e]">
                  <p>Introduction to UI/UX Design</p>
                  <p className="font-bold text-sm text-gray-400">2 Topics</p>
                </div>
              </div>
              <div onClick={subCourses}>
                {showSubCourses ? (
                  <div className="flex cursor-pointer pl-5 items-center gap-[5px] text-sm font-semibold text-orange-300">
                    <IoIosArrowUp className="text-white bg-[#ffab5e] w-4 h-4 rounded-full" />
                    <button>Collapse</button>
                  </div>
                ) : (
                  <div className="flex cursor-pointer pl-5 items-center gap-[5px] text-sm font-semibold text-orange-300">
                    <IoIosArrowDown className="text-white bg-[#ffab5e] w-4 h-4 rounded-full" />
                    <button>Expand</button>
                  </div>
                )}
              </div>
            </div>

            {showSubCourses && (
              <div>
                <div className="relative">
                  <VscTriangleDown className="absolute top-[-7px] text-white left-[53px] text-2xl" />
                  <div className="flex lg:flex-row flex-col space-y-2 justify-between px-14 py-5 bg-[#ffab5e] font-bold  text-white">
                    <div className="flex items-center gap-[5px]">
                      <RiFileListLine className="text-xl" />
                      <p>Lesson Content</p>
                    </div>
                    <div className="flex gap-3 text-[10px]">
                      <span>0% COMPLETE</span>
                      <span>|</span>
                      <span className="font-thin ">0/2 Steps</span>
                    </div>
                  </div>
                </div>

                <div className="px-14 py-8 space-y-7 font-normal text-sm">
                  <Link to="/UiuxExt">
                    <div className="flex items-center gap-2 pb-5">
                      <BiRadioCircle className="text-gray-300 text-[30px] " />
                      <p className="hover:cursor-pointer hover:text-[#ffab5e]">
                        Understanding Users and Design Thinking
                      </p>
                    </div>
                  </Link>
                  <Link to="/UiuxExt2">
                    <div className="flex items-center gap-2 border-t-[1px] pt-8">
                      <BiRadioCircle className="text-gray-300 text-[30px] " />
                      <p className="hover:cursor-pointer hover:text-[#ffab5e]">
                        Information Architecture and User Flows
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="border-2 rounded-lg">
            <div className="flex lg:flex-row flex-col px-6 pt-6 pb-4 justify-between ">
              <div className="flex items-center gap-1">
                <FaRegCircle className="text-gray-300 text-xl " />
                <div className="pt-2 text-base hover:cursor-pointer hover:text-[#ffab5e]">
                  <p>Wireframing and Low-Fidelity Prototyping</p>
                  <p className="font-bold text-sm text-gray-400">2 Topics</p>
                </div>
              </div>
              <div onClick={subCourses2}>
                {showSubCourses2 ? (
                  <div className="flex cursor-pointer pl-5 items-center gap-[5px] text-sm font-semibold text-orange-300">
                    <IoIosArrowUp className="text-white bg-[#ffab5e] w-4 h-4 rounded-full" />
                    <button>Collapse</button>
                  </div>
                ) : (
                  <div className="flex cursor-pointer pl-5 items-center gap-[5px] text-sm font-semibold text-orange-300">
                    <IoIosArrowDown className="text-white bg-[#ffab5e] w-4 h-4 rounded-full" />
                    <button>Expand</button>
                  </div>
                )}
              </div>
            </div>
            {showSubCourses2 && (
              <div>
                <div className="relative">
                  <VscTriangleDown className="absolute top-[-7px] text-white left-[53px] text-2xl" />
                  <div className="flex lg:flex-row flex-col space-y-2 justify-between px-14 py-5 bg-[#ffab5e] font-bold  text-white">
                    <div className="flex items-center gap-[5px]">
                      <RiFileListLine className="text-xl" />
                      <p>Lesson Content</p>
                    </div>
                    <div className="flex gap-3 text-[10px]">
                      <span>0% COMPLETE</span>
                      <span>|</span>
                      <span className="font-thin ">0/2 Steps</span>
                    </div>
                  </div>
                </div>

                <div className="px-14 py-8 space-y-7 font-normal text-lg">
                  <Link to="/UiuxExt3">
                    <div className="flex items-center gap-2 pb-5">
                      <BiRadioCircle className="text-gray-300 text-[30px]" />
                      <p className="hover:cursor-pointer hover:text-[#ffab5e] text-sm">
                        Visual Design Principles
                      </p>
                    </div>
                  </Link>
                  <Link to="/UiuxExt4">
                    <div className="flex items-center gap-2 border-t-[1px] pt-8">
                      <BiRadioCircle className="text-gray-300 text-[30px] " />
                      <p className="hover:cursor-pointer hover:text-[#ffab5e] text-sm">
                        Building Interactive Prototypes
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
      <EmailSecH />
      <HackFooter />
    </section>
  );
};

export default Courses2A;
