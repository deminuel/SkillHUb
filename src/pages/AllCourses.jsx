import React from "react";
import AllCrsHs from "../Components/AllCrsHs";
import AllCrsMs from "../Components/AllCrsMs";
import HackFooter from "../Components/HackFooter";
import EmailSecH from "../Components/EmailSecH";


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
