import React from "react";
import { Link } from "react-router-dom";

const subCourses = [
  {
    img: "https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/html.jpg",
    course: "HTML5/CSS3 Essentials",
    description:
      " Learn how to build modern, responsive websites from scratch using the core technologies of the web.",
    link: "/All",
  },
  {
    img: "https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/wordpress.jpg",
    course: " UI/UX Design Fundamentals",
    description:
      "  Understand user-centered design, wireframing, and creating beautiful, functional interfaces.",
    link: "/Cou2",
  },
  {
    img: "https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/ecommerce.jpg",
    course: "Cybersecurity Essentials",
    description:
      " Learn how to protect systems, networks, and data from cyber threats using industry best practices.",
    link: "/Cou3",
  },
  {
    img: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2023/03/How-to-Learn-Digital-Marketing.jpg.optimal.jpg",
    course: "Digital Marketing",
    description:
      "Learn the essential skills to promote brands online using social media, content creation, analytics etc.",
  },
  {
    img: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    course: "WordPress Tutorial",
    description:
      " Learn how to build, customize, and manage professional websites using WordPress.",
  },
  {
    img: "https://etcinstitute.com/wp-content/uploads/2023/08/Analysis.png",
    course: "Data Analysis",
    description:
      "Master the skills needed to collect, clean, analyze, and interpret data in today's data-driven world.",
  },
];

const CourseSu = () => {
  return (
    <>
      {subCourses.map((c, idx) => (
        <div
          key={idx}
          className="lg:w-[375px] w-full lg:h-[450px] h-full border-2 bg-white"
        >
          <img src={c.img} alt="courses" />
          <div className="px-5 py-7 space-y-5">
            <h3 className="font-semibold text-4xl">{c.course}</h3>
            <p className="text-sm pb-4">{c.description}</p>
            <Link to={c.link}>
              <button className="bg-blue-400 hover:bg-blue-600 hover:border-[1px] hover:border-gray w-full px-6 py-2 rounded-lg text-white font-medium text-sm">
                See more...
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseSu;
