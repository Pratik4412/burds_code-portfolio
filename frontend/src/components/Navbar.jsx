import React from "react";
import logo from "../assets/logo.png";
const Navbar = ({ setIsOpen }) => {
  return (
    <section className="nvabar">
      <div className="navbar_nav">
        <div className="logo">
          <div className="logo_img">
            <img src={logo} alt="" />
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </nav>
        </div>
        <div className="btn">
          <button onClick={() => setIsOpen(true)}>Gt In Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
