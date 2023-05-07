import logo from "./thlogowhite.png";
import React, { useState } from "react";
import "./navigationBar.style.css";

const NavBar = () => {
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setRotate(!rotate);
  };

  return (
    <>
      <ul className="navbar">
        <li>
          <a>Offer</a>
        </li>
        <li>
          <a>Pricing</a>
        </li>
        <li className="logo">
          <a>
            <img
              src={logo}
              alt="logo"
              className={rotate ? "rotate" : ""}
              onClick={handleClick}
            />{" "}
            Tomasz Hanasz Inc
          </a>
        </li>
        <li>
          <a>About Us</a>
        </li>
        <li className="contact">
          <a>Contact</a>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
