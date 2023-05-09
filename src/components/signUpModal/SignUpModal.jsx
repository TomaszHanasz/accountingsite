import CustomForm from "../customForm/CustomForm";
import CustomButton from "../customButton/CustomButton";
import React from "react";
import "./signUpModal.style.css";

const SignUpModal = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div className="overlay">
      <div className="modal-container" open={open}>
        <CustomButton role="closeBtn" buttonName="X" onClick={onClose} />
        <CustomForm />
      </div>
    </div>
  );
};

export default SignUpModal;
