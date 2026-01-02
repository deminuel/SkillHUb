import React from "react";
import Membership from "../Components/membership";
import FaqItem from "../Components/FaqItem";

import EmailSecH from "../Components/EmailSecH";
import HackFooter from "../Components/HackFooter";


const PricingPage = () => {
  return (
    <>
      <div className=" bg-gradient-to-b from-[#ecf0f2] to-slate-100">
        <Membership />
        <FaqItem />
        <EmailSecH />
        <HackFooter />
      </div>
    </>
  );
};

export default PricingPage;
