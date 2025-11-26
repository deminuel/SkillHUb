import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HackFooter = () => {
  return (
    <section className="bg-gradient-to-b from-[#fdfdfd] to-[#eef3f5] text-[#1c1c1c] font-[Poppins]">
      {/* Main Footer Content */}
      <article className="max-w-7xl mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 py-16 px-6">
        {/* Brand + Description */}
        <div className="space-y-6 text-center lg:text-left">
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/logo-retina.png"
            alt="Logo"
            className="w-40 mx-auto lg:mx-0"
          />

          <p className="text-[15px] text-gray-600 leading-relaxed lg:pr-6">
            Gain the practical, in-demand skills you need to advance your
            career, unlock creativity, and thrive in today's digital world.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 text-2xl text-[#007991]">
            {[
              FaFacebookSquare,
              FaSquareXTwitter,
              FaSquareGithub,
              FaInstagramSquare,
              FaYoutube,
            ].map((Icon, i) => (
              <Icon
                key={i}
                className="cursor-pointer transition-all duration-300 hover:text-orange-400 hover:-translate-y-[2px]"
              />
            ))}
          </div>
        </div>

        {/* Popular Courses */}
        <div className="text-center lg:text-left">
          <h3 className="font-bold text-2xl mb-5">Popular Courses</h3>
          <div className="flex flex-col space-y-3 text-[15px]">
            {[
              "Digital Marketing",
              "WordPress Basic Tutorial",
              "HTML5/CSS3 Essentials",
              "JavaScript Development",
              "Cybersecurity Essentials",
              "UI/UX Design Fundamentals",
            ].map((course, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-[#007991] transition-all font-medium"
              >
                {course}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center lg:text-left">
          <h2 className="font-bold text-2xl mb-5">Contact Info</h2>

          <div className="space-y-4 text-[15px]">
            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <p>Soun Ajagungbade Avenue, Ibadan, Oyo, Nigeria.</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p>+23470099122</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p>contact@info.com</p>
            </div>
          </div>
        </div>
      </article>

      {/* Bottom Footer Bar */}
      <article className="border-t border-gray-300 py-6 px-6 flex flex-col lg:flex-row justify-between text-gray-600 text-sm max-w-7xl mx-auto">
        <p>© 2025 Online Courses. All rights reserved.</p>
        <p>Powered by Online Courses</p>
      </article>
    </section>
  );
};

export default HackFooter;
