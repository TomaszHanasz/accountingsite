import React from "react";
import "./formInput.style.css";

const FormInput = ({ label, type, role }) => {
  return (
    <>
      <div className={`form-input ${role}`}>
        <label>{label}</label>
        <input type={type} />
      </div>
    </>
  );
};

export default FormInput;
