import React, { useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import images1 from "../assets/img1.jpeg";
import images2 from "../assets/img2.jpeg";
import images3 from "../assets/logo.jpg";
import image4 from "../assets/img4.jpeg";
import CountUp from "react-countup";
import { Rate } from "antd";
import Aos from "aos";

const instructorCard = [
  {
    text: "A renowned cybersecurity expert with two decades of experience protecting critical infrastructure for government agencies and multinational corporations.",
    name: "Olamide Adegboyega",
    picture: images1,
  },
  {
    text: "A celebrated UI/UX designer whose work has earned multiple industry accolades, including the prestigious Red Dot Design Award and Webby Award.",
    name: "Sulaimon Faishat",
    picture: images2,
  },
  {
    text: "A pioneering force in modern web development with over 15 years of experience building scalable applications for Fortune 500 companies worldwide.",
    name: "Fadahunsi John",
    picture: images3,
  },
  {
    text: "A dynamic digital marketing strategist who has helped over 30 businesses scale from startup to seven-figure revenue through data-driven marketing campaigns.",
    name: "Omolola Alabi",
    picture: image4,
  },
];

const AddMain = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="py-10 pl-10 bg-gradient-to-b from-[#ecf0f2] to-[#e8eaea]">
      <article className="flex lg:flex-row flex-col space-y-14">
        <div className="flex-1 space-y-4">
          <h6 className="font-semibold text-xl">Testimonials</h6>
          <h2 className="font-semibold text-5xl leading-[1.2]">
            Trusted by Thousand of Students and Tutors
          </h2>
        </div>

        <div className="flex-1">
          <div className="flex lg:items-center lg:justify-center gap-4">
            <h1 className="font-bold text-8xl">
              <CountUp
                start={0.0}
                end={4.8}
                duration={10}
                decimals={2}
              ></CountUp>
            </h1>
            <div className="flex flex-col space-y-2">
              <span className="flex text-orange-400 gap-2 text-xs">
                <Rate allowHalf defaultValue={4.5} />
              </span>
              <h4 className="font-semibold text-lg">
                <CountUp start={2394} end={5000} duration={1000}></CountUp>
                Ratings
              </h4>
              <h5 className="font-semibold text-lg">Google Reviews</h5>
            </div>
          </div>
        </div>
      </article>

      <article
        data-aos="fade-down-right"
        duration="1000"
        className="pt-28 pr-12"
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {instructorCard.map((i, idx) => (
            <div
              key={idx}
              className="relative bg-white border pl-10 pt-14 pb-2 pr-1 rounded-2xl space-y-7 mb-20"
            >
              <p className="text-base">{i.text}</p>
              <h4 className="font-semibold text-lg ">{i.name}</h4>
              <span className="flex text-orange-400 gap-2 text-xs justify-end">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>

              <div className="absolute top-[-100px]">
                <img
                  src={i.picture}
                  //"https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/online-programming-course-review-01.jpg"
                  alt="ll"
                  className="rounded-xl w-20 h20"
                />
              </div>
            </div>
          ))}

          {/* <div className="relative bg-white border pl-10 pt-14 pb-2 pr-1 rounded-2xl space-y-7 mb-20">
              <p className="text-base">
                “A celebrated UI/UX designer whose work has earned multiple
                industry accolades, including the prestigious Red Dot Design
                Award and Webby Award.”
              </p>
              <h4 className="font-semibold text-lg">Sulaimon Faishat</h4>
              <span className="flex text-orange-400 gap-2 text-xs justify-end">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>

              <div className="absolute top-[-100px]">
                <img
                  src={images2}
                  //"https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/online-programming-course-review-02.jpg"
                  alt=""
                  className="rounded-xl w-20 h20"
                />
              </div>
            </div>

            <div className="relative bg-white border pl-10 pt-14 pb-2 pr-1 rounded-2xl space-y-7 mb-20">
              <p className="text-base">
                “A pioneering force in modern web development with over 15 years
                of experience building scalable applications for Fortune 500
                companies.”
              </p>
              <h4 className="font-semibold text-lg">Fadahunsi John</h4>
              <span className="flex text-orange-400 gap-2 text-xs justify-end">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>

              <div className="absolute top-[-100px]">
                <img
                  src={images3}
                  //"https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/online-programming-course-review-03.jpg"
                  alt=""
                  className="rounded-xl w-20 h20"
                />
              </div>
            </div>

            <div className="relative bg-white border pl-10 pt-14 pb-2 pr-1 rounded-2xl space-y-7 mb-20">
              <p className="text-base">
                "A dynamic digital marketing strategist who has helped over 30
                businesses scale from startup to seven-figure revenue through
                data-driven marketing campaigns.”
              </p>
              <h4 className="font-semibold text-lg">Omolola Alabi</h4>
              <span className="flex text-orange-400 gap-2 text-xs justify-end">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>

              <div className="absolute top-[-100px]">
                <img
                  src={images4}
                  //"https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/online-programming-course-review-04.jpg"
                  alt=""
                  className="rounded-xl w-20 h20"
                />
              </div>
            </div> */}
        </div>
      </article>
    </section>
  );
};

export default AddMain;
