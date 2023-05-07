import "./customButton.style.css";

const CustomButton = ({ type, onClick, buttonName }) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default CustomButton;
