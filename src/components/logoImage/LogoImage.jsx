import React, { useState } from "react";
import "./logoImage.style.css";

const LogoImage = (props) => {
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setRotate(!rotate);
  };
  return (
    <img
      src={props.src}
      className={`${props.className} ${rotate ? "rotate" : ""}`}
      alt={`${props.alt}`}
      onClick={handleClick}
    ></img>
  );
};

export default LogoImage;
