import React from "react";






import Sub2 from "../Components/Sub2";
import SubMain from "../Components/SubMain";
import AddMain from "../Components/AddMain";
import EmailSecH from "../Components/EmailSecH";
import HackFooter from "../Components/HackFooter";
import MainHome from "../Components/MainHome";


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
