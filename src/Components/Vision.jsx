import VisionSection from "./VisionSection";
import illustration from "../assets/vision.png";

const Vision = () => {
  return (
    <VisionSection
      illustration={illustration}
      leftParagraph={`At SkillHub, our vision is to break barriers and ignite curiosity. 
      We believe learning is a lifelong journey, and technology is the key 
      to unlocking limitless potential. Whether you're a complete beginner 
      or a seasoned pro, we're here to guide you through the ever-evolving 
      world of web development.`}

      rightParagraph={`We're not just an e-learning platform—we're a community of passionate 
      learners, creators, and innovators. Our mission is to empower you 
      with hands-on skills, real-world projects, and mentorship. From 
      coding fundamentals to advanced tech stacks, we provide everything 
      you need to excel and build meaningful solutions.`}
    />
  );
};

export default Vision;
