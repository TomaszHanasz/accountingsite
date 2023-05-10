import CustomButton from "../customButton/CustomButton";
import "./countComponent.style.css";

const CountComponent = ({ onClick, count, buttonName }) => {
  return (
    <div className="count-component">
      <p className="count-result">{count}</p>
      <CustomButton
        onClick={onClick}
        buttonName={buttonName}
        role={`count-button`}
      />
    </div>
  );
};

export default CountComponent;
