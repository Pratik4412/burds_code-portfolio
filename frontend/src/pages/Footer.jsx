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
      icon: <FaFacebook size={24} />,
    },
    {
      icon: <AiFillInstagram size={24} />,
    },
    {
      icon: <FaXTwitter size={24} />,
    },
    {
      icon: <FaYoutube size={24} />,
    },
  ];
  return (
    <div className="pb-10 px-20">
      <div className="flex items-center gap-16">
        <div>
          <img src={footerIcon} alt="" />
        </div>
        <div className="flex flex-col gap-8 ">
          <div className="flex items-center justify-end">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col gap-8">
            <h5>INFO</h5>
            <div className="nav">
              <ul className="flex items-center justify-between gap-4">
                <li>Home</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
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
            <p>
              © [Year] [Your Brand Name]. All Rights Reserved. 🔒 Privacy Policy
              | Terms & Conditions
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 ">
              {socialMedia.map((item, index) => (
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border border-gray-500 text-white"
                  key={index}
                >
                  {item.icon}
                </div>
              ))}
            </div>
            <div className="copy">
              <p>© 2025 — Copyright</p>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Footer;
