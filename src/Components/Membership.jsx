import React from "react";
import Card from "../utils/Card";
import Nav from "../utils/Nav";

const Membership = () => {
  const memberships = [
    {
      title: "Monthly",
      price: 15000,
      duration: "Month",
      features: [
        "Course Learning Checks",
        "Course Discussion",
        "Excercise Files",
        // "Offline Viewing",
        // "Full Lifetime Access",
        "Certificate of Completion",
      ],
      buttonText: "Purchase",
      textColor: "text-black",
      bgColor: "bg-white",
    },
    {
      title: "Annual",
      price: 180000,
      duration: "Year",
      features: [
        "Course Learning Checks",
        "Course Discussion",
        "AI Navigation",
        "Excercise Files",
        "Offline Viewing",
        "Q&A Community",
        "Certificate of Completion",
        "Full Lifetime Access",
        "Job Application Tool",
      ],
      textColor: "text-white",
      buttonText: "Purchase",
      bgColor: "bg-cyan-700",
    },
    {
      title: "Extended",
      price: 20000,
      duration: "Month",
      features: [
        "Course Learning Checks",
        "Course Discussion",
        "AI Navigation",
        "Excercise Files",
        "Offline Viewing",
        "Q&A Community",
        "Full Lifetime Access",
        "Certificate of Completion",
        "Job Application Tool",
      ],
      buttonText: "Purchase",
      bgColor: "bg-white",
    },
  ];

  return (
    <section className="bg-slate-100">
      <div className="bg-cover bg-center bg-[url(https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-05-free-img.jpg)] rounded-br-[100px]">
        <div className="bg-cyan-700/85 text-white pb-32  rounded-br-[100px]">
          <Nav />
          <h1 className="text-7xl font-bold mb-8 px-8">Pricing & FAQ</h1>
          <p className="text-sm px-8">
            Choose the perfect learning plan for your goals. Flexible pricing
            options with unlimited access to
            <br />
            our courses and expert instructors.
          </p>
        </div>
      </div>

      <div className="flex mt-20 justify-between text-black px-10">
        <div>
          <h4 className="text-sm font-bold mb-5">Become a member</h4>
          <h2 className="text-4xl font-bold">Membership</h2>
        </div>
        <ul className="text-orange-500 font-bold leading-none ml-32">
          <li>|</li>
          <li>|</li>
          <li>|</li>
          <li>|</li>
          <li>|</li>
          <li>|</li>
        </ul>
        <p className="mt-5">
          Select a plan that fits your learning journey. All plans include
          lifetime access to purchased courses,
          <br /> downloadable resources, and certificates of completion.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {memberships.map((plan, index) => (
          <Card
            key={index}
            title={plan.title}
            price={plan.price}
            duration={plan.duration}
            features={plan.features}
            buttonText={plan.buttonText}
            bgColor={plan.bgColor}
            textColor={plan.textColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Membership;
