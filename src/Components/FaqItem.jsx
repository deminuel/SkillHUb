import React from "react";
import { useState } from "react";
import { GoTriangleRight } from "react-icons/go";

const FaqItem = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who Should Take an Online Course?",
      answer:
        "Anyone looking to learn new skills, advance their career, or explore personal interests. ",
    },
    {
      question: "How Do I Access My Course?",
      answer:
        "After enrollment, you'll receive a confirmation email with your login details. Simply log in to your dashboard to access all your courses.",
    },
    {
      question: "Are There Prerequisites or Language Requirements?",
      answer:
        "Prerequisites vary by course and are listed on each course page. All courses are taught in English.",
    },
    {
      question: "Can I take more than One Course at a Time?",
      answer:
        "Yes! You can enroll in multiple courses and access them all from your dashboard. ",
    },
    {
      question: "My Payment Did Not Go Through. What Do I do?",
      answer:
        "Check your payment details and try again. If the issue continues, contact our support team.",
    },
    {
      question: "How Does Online Learning Work?",
      answer:
        "Access video lessons, resources, and assignments anytime from any device.",
    },
  ];

  const Click = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="flex gap-24 mb-10">
        <div className="mt-36 px-8">
          <p className="text-black font-bold text-l mb-3">
            Have Any Questions?
          </p>
          <h1 className="text-black text-5xl font-bold mb-6">FAQ's</h1>
          <h5>
            Find answers to common questions about our courses,
            <br />
            enrollment process, and learning platform.
          </h5>
        </div>

        <div className="mt-36 flex-1 px-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-100 border border-gray-200 shadow-md px-6 py-4 mb-4"
              >
                <button
                  onClick={() => Click(index)}
                  className="w-full flex items-center justify-between text-left outline-none"
                >
                  <span className="text-black font-bold">{faq.question}</span>

                  <GoTriangleRight
                    className={` w-6 h-6 transition-transform duration-300
             ${isOpen ? "rotate-90" : ""}`}
                  />
                </button>

                {isOpen && <div className="mt-2 text-black">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </section>
      {/* <section className="mb-10 mt-36 text-center">
        <h1 className="text-5xl text-black font-bold mb-6">
          Join Our Community
        </h1>
        <h5 className="text-black mb-9">
          Enter your email address to register to our newsletter subscription
          delivered on regular basis!
        </h5>
        <div className=" flex gap-5 justify-center ">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-20 border border-dotted border-black rounded-sm outline-none"
          ></input>
          <button className="bg-orange-400 text-white uppercase px-10 py-2 hover:bg-cyan-700 rounded-full">
            Subscribe
          </button>
        </div>
      </section> */}
    </>
  );
};

export default FaqItem;
