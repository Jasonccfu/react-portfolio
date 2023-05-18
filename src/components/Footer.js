import React from "react";
import { FaGithubSquare, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#65FBD2]">JASON CHEN</h1>
          <p className="py-4">
                A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
          </p>
        </div>
        <div className="lg:col-span-2 flex items-center justify-center">
          <div className="flex items-center space-x-10">
            {/* <h6 className="font-medium text-gray-400">SOCIAL</h6> */}
            <FaGithubSquare size={35} />
            <FaLinkedin size={35} />
            <FaMailBulk size={35} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()}. Made by Jason Chen
        </div>
      </div>
    </>
  );
};

export default Footer;
