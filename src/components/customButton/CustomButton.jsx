import "./customButton.style.css";

const CustomButton = ({ onClick, buttonName }) => {
  return (
    <button className={`btn`} onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default CustomButton;
