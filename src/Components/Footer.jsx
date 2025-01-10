import React from "react";

const Footer = () => {
  return (
    <div className="w-screen">
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-4" />
      <p class="flex justify-center text-sm text-orange-600 font-semibold text-center my-4">
        Designed and Coded by &nbsp;
        <a href="https://Harsh.netlify.app/" class="hover:underline">
          {" "}
          Harsh™
        </a>
        ✨
      </p>
    </div>
  );
};

export default Footer;
