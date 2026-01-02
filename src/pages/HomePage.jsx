import React from "react";




import AddMain from "../components/AddMain";
import HackFooter from "../Components/HackFooter";
import EmailSecH from "../Components/EmailSecH";
import MainHome from "../Components/MainHome";
import Sub2 from "../Components/Sub2";
import SubMain from "../Components/SubMain";


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
