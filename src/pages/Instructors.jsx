import React from "react";
import Instruct from "../Components/Instruct";
import Hiro from "../Components/Hiro";

import Community from "../Components/Community";
import Footer from "../Components/Footer";
import KardSection from "../Components/KardSection";

const Instructors = () => {
  return (
    <div className="selection:bg-orange-400">
      <Instruct />
      <Hiro />
      <KardSection />
      <Community />
      <Footer />
    </div>
  );
};
export default Instructors;
