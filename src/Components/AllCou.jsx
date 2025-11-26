import React, { useState } from "react";
import EmailSecH from "./EmailSecH";
import { FaRegCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp, IoMdMenu } from "react-icons/io";
import HackFooter from "./HackFooter";
import NavList from "../Utils/NavList";
import { VscTriangleDown } from "react-icons/vsc";
import { BiRadioCircle } from "react-icons/bi";
import { RiFileListLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AllCou = () => {
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
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/html.jpg"
            alt=""
            className=""
          />
          <h4 className="font-bold text-2xl pt-5">HTML5/CSS3 Essentials</h4>
          <h4 className="font-semibold text-xl pt-2 pb-5">
            Mastering HTML5 and CSS3- The Foundations of Modern Web Design.
          </h4>
          <h2 className="font-bold text-3xl lg:text-4xl py-5">
            Course Description
          </h2>
          <p>
            This course provides a comprehensive introduction to HTML5 and CSS3,
            the core technologies for building modern, responsive, and visually
            engaging websites. You'll learn how to create structured, semantic
            web pages with HTML5 and bring them to life using the powerful
            styling capabilities of CSS3. By combining theory with hands-on
            practice, you'll gain the skills needed to design and build web
            pages that are accessible, mobile-friendly, and standards-compliant.
          </p>
          <h4 className="font-bold text-2xl py-5">
            Key Concepts Covered Include:
          </h4>
          <ul className="list-disc list-inside px-6 pb-6">
            <li>Build and style a complete, responsive web page project.</li>
            <li>
              Understand the structure and purpose of HTML5 and CSS3 in web
              development.
            </li>
            <li>Well explained and comprehensive coverage.</li>
            <li>
              Apply transitions, animations, and visual effects with CSS3.
            </li>
            <li>
              Dedicated sessions will be given on CSS, CSS Advanced, and CSS3.
            </li>
          </ul>
          <p>
            After completing this course, youll be able to build and style
            modern, responsive, and accessible websites using the latest HTML5
            and CSS3 features- preparing you for advanced topics like
            JavaScript, web interactivity, and front-end frameworks.
          </p>
        </div>

        <div className="flex lg:flex-row gap-4 flex-col justify-between pt-20 pb-10">
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
                  <Link to="/ItHtml">
                    <p>Introduction to HTML</p>
                  </Link>
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
                  <Link to="/Ext">
                    <div className="flex items-center gap-2 pb-5">
                      <BiRadioCircle className="text-gray-300 text-[30px] " />
                      <p className="hover:cursor-pointer hover:text-[#ffab5e]">
                        HTML Elements
                      </p>
                    </div>
                  </Link>
                  <Link to="/Hattb">
                    <div className="flex items-center gap-2 border-t-[1px] pt-8">
                      <BiRadioCircle className="text-gray-300 text-[30px] " />
                      <p className="hover:cursor-pointer hover:text-[#ffab5e]">
                        HTML Attributes
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
                  <p>Introduction and Basics of CSS</p>
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
                  <Link to="/Atag">
                    <div className="flex items-center gap-2 pb-5">
                      <BiRadioCircle className="text-gray-300 text-[30px]" />
                      <p className="hover:cursor-pointer hover:text-[#ffab5e] text-sm">
                        Anatomy of Tags
                      </p>
                    </div>
                  </Link>
                  <Link to="/SelCss">
                    <div className="flex items-center gap-2 border-t-[1px] pt-8">
                      <BiRadioCircle className="text-gray-300 text-[30px] " />
                      <p className="hover:cursor-pointer hover:text-[#ffab5e] text-sm">
                        Selectors in CSS
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

export default AllCou;
