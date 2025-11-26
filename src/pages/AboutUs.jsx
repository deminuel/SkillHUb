import React from "react";
import Navbar from "../Components/Navbar";
import OurPurpose from "../Components/OurPurpose";
import Newsletter from "../Components/Newsletter";
import Vision from "../Components/Vision";
import Founder from "../Components/Founder";
import BgAttachment from "../Components/BgAttachment";
import Features from "../Components/Features";
import HackFooter from "../components/HackFooter";

const AboutUs = () => {
  return (
    <div className="bg-[#ecf0f2]">
      <Navbar />
      <OurPurpose />
      <Founder />
      <BgAttachment />
      <Vision />
      <Features />
      <Newsletter />
      <HackFooter />
    </div>
  );
};

export default AboutUs;
