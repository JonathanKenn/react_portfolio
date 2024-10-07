import React from "react";
import SocialIcon from "../components/SocialIcon";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#191816] pb-28 pt-14 text-white">
      <div className="flex gap-5">
        <SocialIcon />
      </div>
      <div className="mx-auto my-6 h-[2px] w-4/5 bg-gradient-to-r from-secondary via-primary to-secondary lg:w-1/3"></div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-light lg:text-base">
          Created by Joo, using React
        </p>
        <img
          src="img/language/react-js-icon.svg"
          alt="react"
          className="size-5"
        />
      </div>
    </div>
  );
};

export default Footer;
