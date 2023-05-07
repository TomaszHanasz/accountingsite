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
          <a href="#">Offer</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li className="logo">
          <a href="#">
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
          <a href="#">About Us</a>
        </li>
        <li className="contact">
          <a href="#">Contact</a>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
