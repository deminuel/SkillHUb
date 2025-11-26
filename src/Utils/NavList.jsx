import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <>
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
    </>
  );
};

export default NavList;
