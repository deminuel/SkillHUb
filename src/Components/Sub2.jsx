import React from "react";
import { FaCertificate, FaCrown, FaPlay, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Certificate from "../utils/Certificate";
import { useUser } from "../context/UserContext";

const Sub2 = () => {
  const { user } = useUser();

  return (
    <section className="py-14 bg-[#ecf0f2]">
      <article className="relative px-10 flex lg:flex-row flex-col gap-8 items-center lg:h-96 h-full w-full bg-center bg-cover bg-fixed bg-[url('https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/background1.jpg')]">
        <div className="absolute bg-[#007991] inset-0 opacity-[0.95]"></div>
        <Certificate />
        {/* <div className="lg:py-28 py-10 flex-[22%] z-10">
          <div className="flex gap-[2px] pt-[30px] pb-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
          </div>
          <h1 className="text-white font-bold text-3xl pt-4 mb-4">
            Experience
          </h1>
          <p className="text-white text-sm font-thin italic">
            Trusted by thousands of students worldwide for delivering
            high-quality, engaging learning experiences.
          </p>
        </div> */}

        {/* <div className=" lg:py-28  py-10 flex-[22%] z-10">
          <div className="flex gap-[2px] pt-[38px] pb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
          </div>
          <h1 className="text-white font-bold text-3xl pt-5 mb-4">Education</h1>
          <p className="text-white text-sm font-thin italic">
            Empowering students with knowledge that leads to opportunity and
            growth by learning from expert instructors through structured,
            easy-to-understand lessons.
          </p>
        </div>

        <div className=" lg:py-28 py-10 flex-[22%] z-10">
          <div className="flex gap-[2px] py-6 pt-[35px] pb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
          </div>
          <h1 className="text-white font-bold text-3xl mb-4">Certificate</h1>
          <p className="text-white text-sm font-thin italic">
            Receive a verified and recognized certificate that highlights your
            dedication, expertise, and readiness for new opportunities.
          </p>
        </div> */}

        <div className="bg-white h-[275px] mt-[110px] px-10 py-10 flex-[34%] z-10">
          <div className="space-y-5">
            <h3 className="text-lg font-medium">Study at Your Own Pace</h3>
            <h1 className="text-2xl font-semibold">
              Boost Your Career by Learning Skills in High Demand
            </h1>
          </div>
          <div className="flex items-center pt-12 gap-2 text-base font-semibold hover:text-orange-400">
            {!user && (
              <>
                <FaPlay className="text-sm p-[2px]" />
                <Link to="/login">
                  <a href="">GET STARTED</a>
                </Link>
              </>
            )}
          </div>
        </div>
      </article>

      <article className="flex lg:flex-row flex-col px-10 py-20 space-y-7">
        <div className="flex-1 space-y-4">
          <h5 className="font-semibold text-lg">Features of Our Courses</h5>
          <h2 className="font-semibold text-5xl">Why choose Us?</h2>
          <p className="font-light">
            We provide more than just online courses, we offer a complete
            learning experience designed for your success. Our platform combines
            expert instructors, easy-to-follow lessons, and hands-on projects to
            help you master real-world skills. With flexible learning schedules,
            affordable pricing, and lifetime access to course materials, you can
            learn at your own pace, anytime and anywhere. Whether you're
            starting a new career, upgrading your skills, or exploring your
            passion, we're here to guide you every step of the way. Join
            thousands of satisfied learners who trust us for quality education
            and real results.
          </p>
        </div>

        <div className="flex-1 lg:pl-20 space-y-10">
          <div className="flex lg:flex-row flex-col lg:gap-5 h-fit w-fit lg:space-y-5 lg:justify-center lg:items-center">
            <div className="bg-orange-400 w-[40px] h-[40px] p-3 text-2xl flex items-center justify-center rounded-[100%] text-white hover:text-[#007991]">
              <FaCrown />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-2xl">Best Industry Leaders</h3>
              <p className="text-base">
                Our courses are taught by top professionals and industry experts
                who bring real-world experience into every lesson.
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-5 h-fit w-fit lg:space-y-5 lg:justify-center lg:items-center">
            <div className="bg-orange-400 w-[40px] h-[40px] p-3 text-2xl flex items-center justify-center rounded-[100%] text-white hover:text-[#007991]">
              <FaRegClock />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-2xl">
                Learn Online at Your Own Pace
              </h3>
              <p className="text-base">
                Enjoy the freedom to learn whenever and wherever you want. Our
                flexible courses let you study at your own speed-pause, rewind,
                or resume anytime.
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-5 h-fit lg:items-center lg:justify-center w-fit lg:space-y-5">
            <div className="bg-orange-400 w-[40px] p-3 h-[40px]  flex items-center justify-center rounded-[100%] text-white hover:text-[#007991]">
              <FaCertificate />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-2xl">Professional Certification</h3>
              <p className="text-base">
                Earn recognized certificates that prove your skills and enhance
                your career opportunities. Each certification reflects your
                dedication, expertise, and ability to apply what you've learned
                in real-world situations.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Sub2;
