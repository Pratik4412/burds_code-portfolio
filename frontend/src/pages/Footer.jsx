import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
import footerIcon from "../assets/footerIcon.png";
const Footer = () => {
  const socialMedia = [
    {
      icon: <FaFacebook size={18} />,
    },
    {
      icon: <AiFillInstagram size={18} />,
    },
    {
      icon: <FaXTwitter size={18} />,
    },
    {
      icon: <FaYoutube size={18} />,
    },
  ];
  return (
    <div className="footer">
      <div className="flex items-center gap-16">
        <img src={footerIcon} alt="" className="hidden lg:flex w-fit h-full" />
        <div className="flex flex-col gap-8 w-full">
          <div className="flex items-center justify-end sm:none ">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col gap-8 ">
            <h5 className="text-[#1544D2] text-sm font-semibold">INFO</h5>
            <div className="nav">
              <ul className="sm:flex items-center justify-between gap-4">
                <li className=" text-lg font-semibold cursor-pointer">Home</li>
                <li className=" text-lg font-semibold cursor-pointer">
                  Services
                </li>
                <li className=" text-lg font-semibold cursor-pointer">
                  Portfolio
                </li>
                <li className=" text-lg font-semibold cursor-pointer">
                  Contact
                </li>
                <li className=" text-lg font-semibold cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>
          <div className="para">
            <p>
              Not a fan of forms? Drop us an email at [your@email.com] or
              WhatsApp us at{" "}
            </p>
            <p>[+91 XXXXXXXXXX]</p>
          </div>
          <div className="cop">
            <p className="text-sm">
              © [Year] [Your Brand Name]. All Rights Reserved. 🔒 Privacy Policy
              | Terms & Conditions
            </p>
          </div>
          <div className="sm:flex-row flex-col flex gap-6 sm:flex items-start   sm:items-center justify-between">
            <div className="flex items-center gap-4 ">
              {socialMedia.map((item, index) => (
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-500 text-white"
                  key={index}
                >
                  {item.icon}
                </div>
              ))}
            </div>
            <div className="text-center flex justify-center items-center">
              <p>© 2025 — Copyright</p>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Footer;
