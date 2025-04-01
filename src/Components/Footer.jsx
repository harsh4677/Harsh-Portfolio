// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <div className="w-screen">
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-4" />
      <p className="flex justify-center text-sm text-orange-600 font-semibold text-center my-4">
        Designed and Coded by &nbsp;
        <a href="https://Harsh.netlify.app/" className="hover:underline">
          {" "}
          Harsh™
        </a>
        ✨
      </p>
    </div>
  );
};

export default Footer;
