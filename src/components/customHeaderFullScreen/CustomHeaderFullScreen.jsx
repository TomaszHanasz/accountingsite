import image from "./laptophand.jpg";
import "./customHeaderFullScreen.style.css";

const CustomHeaderFullScreen = ({
  title,
  text,
  image,
  buttonCall,
  buttonSchedule,
}) => {
  return (
    <>
      <div className="img-container">
        <img className="header-image" src={image} alt="header"></img>
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

export default CustomHeaderFullScreen;
