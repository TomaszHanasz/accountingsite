import "./customHeaderFullScreen.style.css";
import CustomButton from "../customButton/CustomButton";
import SignUpModal from "../signUpModal/SignUpModal";
import React, { useState } from "react";

const CustomHeaderFullScreen = ({ title, text, image }) => {
  const [openModal, setOpenModal] = useState(false);

  const thankYou = () => {
    return alert("Thank You!!");
  };

  const scheduleForm = () => {
    return setOpenModal(true);
  };

  return (
    <>
      <div className="img-container">
        <img className="header-image" src={image} alt="header"></img>
      </div>
      <div className="header-left">
        <h1>{title}</h1>
        <h2>{text}</h2>
        <div className="header-buttons">
          <CustomButton onClick={thankYou} buttonName="Call Us" />
          <CustomButton
            onClick={scheduleForm}
            buttonName="Schedule an Appointment"
          />
        </div>
        <SignUpModal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </>
  );
};

export default CustomHeaderFullScreen;
