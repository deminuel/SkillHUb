import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";
const Card = ({
  title,
  price,
  duration,
  features,
  buttonText,
  bgColor,
  textColor,
}) => {
  return (
    <div
      className={`rounded-lg mt-44 px-4 h-[600px] flex flex-col justify-center items-center text-center ${textColor} ${bgColor}`}
    >
      <artcile>
        <h3 className="text-l font-bold mb-4">{title}</h3>
        <div className="flex justify-center gap-6 mb-10">
          <span className="text-5xl flex items-center font-bold">
            <TbCurrencyNaira />
            {price}
          </span>
          <span className="text-l font-bold relative top-4">/ {duration}</span>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          <div className="w-3 h-1 bg-orange-400 transform -skew-x-[60deg]"></div>
          <div className="w-3 h-1 bg-orange-400 transform -skew-x-[60deg]"></div>
          <div className="w-3 h-1 bg-orange-400 transform -skew-x-[60deg]"></div>
          <div className="w-3 h-1 bg-orange-400 transform -skew-x-[60deg]"></div>
        </div>

        <ul className="text-l mb-8 space-y-2 text-justify">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Link to="/Purchase">
          <div className="">
            <button className="bg-orange-400 text-white uppercase px-7 py-2 rounded-full hover:bg-cyan-700">
              {buttonText}
            </button>
          </div>
        </Link>
      </artcile>
    </div>
  );
};

export default Card;
