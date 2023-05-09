import "./customHeaderFullScreen.style.css";
import CustomButton from "../customButton/CustomButton";

const CustomHeaderFullScreen = ({ title, text, image }) => {
  const thankYou = () => {
    return alert("Thank You!!");
  };

  const scheduled = () => {
    return alert("See you tomorrow!!");
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
            onClick={scheduled}
            buttonName="Schedule an Appointment"
          />
        </div>
      </div>
    </>
  );
};

export default CustomHeaderFullScreen;
