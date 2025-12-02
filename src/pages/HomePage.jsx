import React from "react";

import MainHome from "../components/MainHome";
import SubMain from "../components/SubMain";
import Sub2 from "../components/Sub2";
import AddMain from "../components/AddMain";
import HackFooter from "../Components/HackFooter";
import EmailSecH from "../Components/EmailSecH";


const HomePage = () => {
  return (
    <div className="selection:bg-orange-400 selection:text-black w-fit lg:w-full">
      <MainHome />
      <SubMain />
      <Sub2 />
      <AddMain />
      <EmailSecH />
      <HackFooter />
    </div>
  );
};

export default HomePage;
