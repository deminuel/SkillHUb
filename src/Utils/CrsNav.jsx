import React from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { PiGreaterThanLight, PiLessThanLight } from "react-icons/pi";

const CrsNav = () => {
  return (
    <section>
      <nav className="border-b-[1px] lg:flex items-center gap-[370px] hidden">
        <div>
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/logo-retina.png"
            alt="logo"
            className="w-[120px] my-5 mx-10"
          />
        </div>
        <div className="flex gap-[360px] text-orange-400 font-bold text-xs">
          <div className="flex items-center gap-3 hover:cursor-pointer">
            <FaLessThan />
            <p>Previous Lesson</p>
          </div>
          <div className="flex items-center gap-3 hover:cursor-pointer">
            <p>Next Topic</p>
            <FaGreaterThan />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default CrsNav;
