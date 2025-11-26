import { Facebook, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { PiFacebookLogo } from "react-icons/pi";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message || !subject) {
      return;
    }

    alert("your feedback has  been submitted");
    {
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
  };
  return (
    <section className=" text-black bg-gray-200 p-20 lg:flex ">
      <div className="flex flex-[50%] flex-col ">
        <div className="flex flex-col">
          <h1 className="font-bold  text-5xl">Contact Us</h1>
          <p className="text-gray-800 pt-6">
            We'd love to hear from you! need to enroll for a course, or want to
            explore partnership opportunities, feel free to reach out.
          </p>
        </div>
        <div className="flex flex-col mt-8 gap-5">
          <p className="flex gap-3">
            <MapPin className="text-sm text-black" /> Soun Ajagungbade, Bodija
            Ibadan.
          </p>
          <p className="flex gap-6">
            <BiEnvelope className="text-black" /> SkillHub@gmail.com
          </p>
          <p className="flex gap-3">
            <Phone className="text-black text-sm" />
            +91 867782{" "}
          </p>
        </div>
        <div className="flex pt-5 gap-9 items-center">
          <h3 className="font-bold">keep in Touch</h3>
          <div className="flex gap-8">
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
            <FaYoutube />
          </div>
        </div>
        <div className="mt-10 mr-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3846392606924!2d3.907512774865914!3d7.42261454258786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039edecd85d846d%3A0xb2a7940606746db0!2sAare%20Junction%20Bodija!5e0!3m2!1sen!2sng!4v1762879252187!5m2!1sen!2sng"
            width="300"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className=" flex-[50%] lg:h-[600px] bg-white shadow-lg rounded-lg w-full lg:w-[90%] p-14 mt-16 lg:mt-0  ">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl">Have Questions?</h1>
          <span className="text-gray-800">
            Do you have Questions about our courses, you can also leave us a
            message here.
          </span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col mt-5 gap-5 ">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="lg:w-[400px] h-[50px] border-[1px] border-black outline-none indent-3 bg-gray-100"
            required
            type="text"
            placeholder="Name"
          />
          <input
            className="lg:w-[400px] h-[50px] border-[1px] border-black indent-3 outline-none bg-gray-100"
            required
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className="lg:w-[400px] h-[50px] border-[1px] border-black indent-3 outline-none bg-gray-100"
            required
            type="text"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          <input
            className="lg:w-[400px] h-[95px] border-[1px] border-black indent-3 outline-none bg-gray-100 pb-9"
            required
            type="text"
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button className="text-white bg-orange-500 rounded-3xl w-[150px] lg:w-[180px] h-[45px] hover:bg-[#007991]">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
