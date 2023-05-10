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
      <FormInput label="First Name" type="text" name="first name" />
      <FormInput label="Last Name" type="text" name="last name" />
      <FormInput label="Phone Number" type="number" name="phone number" />
      <FormInput label="Email" type="email" name="email" />
      <FormInput label="Date" type="date" name="date" />
      <FormInput
        label="I will come 100%"
        type="checkbox"
        role="agree"
        name="agree"
      />
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
