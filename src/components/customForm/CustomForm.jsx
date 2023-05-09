import React from "react";
import CustomButton from "../customButton/CustomButton";
import FormInput from "../formInput/FormInput";
import "./customForm.style.css";

function CustomForm() {
  const thankYou = () => {
    return alert("Thank You!!");
  };

  return (
    <form className="sign-up-form">
      <div className="schedule-title">
        <h3>Schedule an Appointment</h3>
      </div>
      <FormInput label="First Name" type="text" />
      <FormInput label="Last Name" type="text" />
      <FormInput label="Phone Number" type="number" />
      <FormInput label="Email" type="email" />
      <FormInput label="Date" type="date" />
      <FormInput label="I will come" type="checkbox" role="agree" />
      <div className="confirmBtn">
        <CustomButton
          role="confirmSchedule"
          buttonName="Schedule"
          onClick={thankYou}
        />
      </div>
    </form>
  );
}

export default CustomForm;
