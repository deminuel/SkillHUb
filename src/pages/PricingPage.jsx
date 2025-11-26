import React from "react";
import Membership from "../components/membership";
import FaqItem from "../components/FaqItem";
import HackFooter from "../components/HackFooter";
import EmailSecH from "../components/EmailSecH";

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
