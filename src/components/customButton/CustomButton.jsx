import "./customButton.style.css";

const CustomButton = (props) => {
  return (
    <button className={`btn ${props.type}`} onClick={props.onClick}>
      {props.buttonName}
    </button>
  );
};

export default CustomButton;
