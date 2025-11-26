import React from "react";

const Card = [
  {
    head: "Experience",
    text: " Gain practical, real-world experience through hands-on projects, interactive lessons, and industry-focused tasts designed to help you apply what you learn immediately",
  },
  {
    head: "Education",
    text: "Empowering students with knowledge that leads to opportunity and growth by learning from expert instructors through structured, easy-to-understand lessons.",
  },
  {
    head: "Certificate",
    text: "  Receive a verified and recognized certificate that highlights your dedication, expertise, and readiness for new opportunities.",
  },
];

const Certificate = () => {
  return (
    <>
      {Card.map((p, idx) => (
        <div key={idx} className="lg:py-28 py-10 flex-[22%] z-10">
          <div className="flex gap-[2px] pt-[30px] pb-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="visible"
              height="100%"
              viewBox="0 0 24 24"
              fill="#fb923c"
              stroke="none"
              className=" w-[20px] h-[8px]"
            >
              <polygon points="9.4,2 24,2 14.6,21.6 0,21.6" />
            </svg>
          </div>
          <h1 className="text-white font-bold text-3xl pt-4 mb-4">{p.head}</h1>
          <p className="text-white text-sm font-thin italic">{p.text}</p>
        </div>
      ))}
    </>
  );
};

export default Certificate;
