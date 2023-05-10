import React from "react";
import "./formInput.style.css";

const FormInput = ({ label, type, role, name }) => {
  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    console.log(name, ":", value);
    if ("Tom" === value) {
      alert(`Hi ${value}`);
    }
  };

  return (
    <>
      <div className={`form-input ${role}`}>
        <label>{label}</label>
        <input type={type} onChange={onChangeHandler} name={name} />
      </div>
    </>
  );
};

export default FormInput;
