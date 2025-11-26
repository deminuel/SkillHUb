import React, { useEffect } from "react";
import liner from "../assets/liner.PNG";
import AOS from "aos";
import "aos/dist/aos.css";
import founder from "../assets/founder.jpeg";

const Founder = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center gap-20">
      <div data-aos="zoom-out">
        <img
          src={founder}
          className="w-[500px] h-[600px]"
          alt="Founder-Image"
        />
      </div>
      <div className="flex px-6 flex-col gap-4">
        <h1 className="font-[poppins] lg:text-[37px] text-[30px] font-semibold">
          Learn Something <br />
          Every Day
        </h1>
        <img width={80} src={liner} alt="liner" />
        <p>
          Every day is a chance to level up. Dive into hands-on lessons,{" "}
          <br className="lg:flex hidden" />
          explore real-world web dev trends, and turn curiosity into code.{" "}
          <br className="lg:flex hidden" />
          From coding tips to project hacks, we fuel your daily growth,{" "}
          <br className="lg:flex hidden" />
          so you can build, innovate, and stay ahead.
        </p>
        <p className="font-[poppins] text-[20px] font-semibold">
          Adegboyega Olamide PhD.
        </p>
        <p className="font-[poppins] text-[15px] font-semibold">Founder</p>
        <img
          width={80}
          src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/signature-free-img.png"
          alt="founder-signature"
        />
      </div>
    </section>
  );
};

export default Founder;
