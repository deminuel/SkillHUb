import React from "react";
import AllCrsHs from "../Components/AllCrsHs";
import AllCrsMs from "../Components/AllCrsMs";
import EmailSecH from "../components/EmailSecH";
import HackFooter from "../components/HackFooter";

const AllCourses = () => {
  return (
    <div className="selection:bg-orange-400 selection:text-black w-fit lg:w-full">
      <AllCrsHs />
      <AllCrsMs />
      <EmailSecH />
      <HackFooter />
    </div>
  );
};

export default AllCourses;
