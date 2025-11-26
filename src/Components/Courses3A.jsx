import React, { useState } from "react";

import { FaChevronCircleDown, FaRegCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp, IoMdMenu } from "react-icons/io";

import NavList from "../Utils/NavList";
import { BiRadioCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { RiFileListLine } from "react-icons/ri";
import { VscTriangleDown } from "react-icons/vsc";
import EmailSecH from "./EmailSecH";
import HackFooter from "./HackFooter";

const Courses3A = () => {
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
            <button className="text-white lg:flex bg-orange-400 hover:bg-[#007991] px-5 py-2 font-semibold rounded-3xl hidden">
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
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/ecommerce.jpg"
            alt=""
            className=""
          />
          <h4 className="font-bold text-2xl pt-5">Cybersecurity Essentials</h4>
          <h4 className="font-semibold text-xl pt-2 pb-5">
            Protecting Data, Devices, and Networks.
          </h4>
          <h2 className="font-bold text-4xl py-5">Course Description</h2>
          <p>
            This course provides a solid foundation in cybersecurity principles,
            tools, and best practices to help you understand how to protect
            systems, networks, and personal data from cyber threats. Through
            real-world examples, interactive labs, and hands-on exercises,
            you'll learn hoe to recognize vulnerabilities, defend against
            attacks, and apply essential security measures- skills that are
            vulnerable in both personal and professional settings.
          </p>
          <h4 className="font-bold text-2xl py-5">
            Key Concepts Covered Include:
          </h4>
          <ul className="list-disc list-inside px-6 pb-6">
            <li>
              Understand key ceybersecurity concepts, terminology, and
              frameworks.
            </li>
            <li>
              Identify common types of cyber threats such as malware, phishing,
              and social engineering.
            </li>
            <li>
              Implement basic network security and data protection techniques.
            </li>
            <li>
              Understand encryption, authentication, and access control
              fundamentals.
            </li>
            <li>
              Recognize vulnerabilities and apply strategies to mitigate risks.
            </li>
            <li>
              Learn about incident response and security best practices for
              organizations.
            </li>
          </ul>
          <p className="hidden lg:flex">
            After completing this course, you'll have a strong understanding of
            the fundamentals of cybersecurity, enabling you to identify risks,
            apply protective measures, and pursue more advanced studies or
            certifications in the field.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 justify-between pt-20 pb-10">
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
                  <p>Introduction to Cybersecurity and its importance</p>
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
                  <Link to="/Csec">
                    <div className="flex items-center gap-2 pb-5">
                      <BiRadioCircle className="text-gray-300 text-[30px] " />
                      <p className="hover:cursor-pointer hover:text-[#ffab5e]">
                        Types of Cyber Threats and Attacks
                      </p>
                    </div>
                  </Link>
                  <Link to="/Csec2">
                    <div className="flex items-center gap-2 border-t-[1px] pt-8">
                      <BiRadioCircle className="text-gray-300 text-[30px] " />
                      <p className="hover:cursor-pointer hover:text-[#ffab5e]">
                        Fundamentals of Networking and Security Protocols
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
                  <p>Authentication, Authorization, and Encryption</p>
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
                      <RiFileListLine />
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
                  <Link to="/Csec3">
                    <div className="flex items-center gap-2 pb-5">
                      <BiRadioCircle className="text-gray-300 text-[30px]" />
                      <p className="hover:cursor-pointer hover:text-[#ffab5e] text-sm">
                        Firewalls, VPNs, and Intrusion Detection Systems
                      </p>
                    </div>
                  </Link>
                  <Link to="/Csec4">
                    <div className="flex items-center gap-2 border-t-[1px] pt-8">
                      <BiRadioCircle className="text-gray-300 text-[30px] " />
                      <p className="hover:cursor-pointer hover:text-[#ffab5e] text-sm">
                        Cybersecurity Policies and Risk Management
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

export default Courses3A;
