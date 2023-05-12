import CustomButton from "../customButton/CustomButton";
import React, { useState } from "react";
import "./countComponent.style.css";

const CountComponent = () => {
  const [count, setCount] = useState(0);

  const onClickHandlerIncrease = () => {
    setCount(count + 10);
    if (count >= 150) {
      setCount(count);
    }
  };

  const onClickHandlerDecrease = () => {
    setCount(count - 10);
    if (count <= 0) {
      setCount(count);
    }
  };

  const onClickHandlerMultiply = () => {
    setCount(count * 5);
    if (count >= 150) {
      setCount(count);
    }
  };

  const onClickHandlerDivide = () => {
    setCount(count / 5);
    if (count < 1) {
      setCount(count);
    }
  };

  const onClickHandlerReset = () => {
    setCount(0);
  };
  return (
    <div className="count-result">
      <h3>{count}</h3>
      <div className="count-block">
        <div className="count-component">
          <CustomButton
            onClick={onClickHandlerIncrease}
            buttonName="+10"
            role={`count-button`}
          />
        </div>
        <div className="count-component">
          <CustomButton
            onClick={onClickHandlerDecrease}
            buttonName="-10"
            role={`count-button`}
          />
        </div>
        <div className="count-component">
          <CustomButton
            onClick={onClickHandlerMultiply}
            buttonName="x 5"
            role={`count-button`}
          />
        </div>
        <div className="count-component">
          <CustomButton
            onClick={onClickHandlerDivide}
            buttonName="/ 5"
            role={`count-button`}
          />
        </div>
        <div className="count-component">
          <CustomButton
            onClick={onClickHandlerReset}
            buttonName="Reset"
            role={`count-button`}
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default CountComponent;
