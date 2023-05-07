import image from "./laptophand.jpg";
import "./customHeaderFullScreen.style.css";

const CustomHeader = ({ title, text, buttonCall, buttonSchedule }) => {
  return (
    <>
      <div className="img-container">
        <img className="header-image" src={image}></img>
      </div>
      <div className="header-left">
        <h1>{title}</h1>
        <h2>{text}</h2>
        <div className="header-buttons">
          <button>{buttonCall}</button>
          <button>{buttonSchedule}</button>
        </div>
      </div>
    </>
  );
};

export default CustomHeader;
