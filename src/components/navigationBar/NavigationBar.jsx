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
          <a href="#top">Offer</a>
        </li>
        <li>
          <a href="#top">Pricing</a>
        </li>
        <li className="logo">
          <a href="#top">
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
          <a href="#top">About Us</a>
        </li>
        <li className="contact">
          <a href="#top">Contact</a>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
