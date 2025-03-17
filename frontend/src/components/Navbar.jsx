import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ setIsOpen }) => {
  const [mobileBtn, setMobileBtn] = useState(false);

  const toggleMobileMenu = () => {
    setMobileBtn(!mobileBtn);
  };
  return (
    <section className="nvabar">
      <div className="navbar_nav">
        <div className="logo">
          <div className="logo_img">
            <img src={logo} alt="" />
          </div>
          <div className="mobile-toggle" onClick={toggleMobileMenu}>
            <GiHamburgerMenu />
          </div>
          <nav className={mobileBtn ? "mobile-menu-open" : ""}>
            <ul>
              <li>Home</li> 
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </nav>
        </div>
        <div className="btn" id="btn">
          <button onClick={() => setIsOpen(true)}>Gt In Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
