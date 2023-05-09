import "./customButton.style.css";

const CustomButton = ({ onClick, buttonName, role }) => {
  return (
    <button className={`btn ${role}`} onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default CustomButton;
