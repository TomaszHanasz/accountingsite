import React, { useState } from "react";
import anteater from "./images/anteater.jpg";
import ant from "./images/ants.jpg";
import probocsis from "./images/probocsis.png";
import leaves from "./images/leaves.png";
import cat from "./images/cat.png";
import mouse from "./images/mouse.png";
import hedgehog from "./images/hedgehog.jpg";
import apple from "./images/apple.png";
import stork from "./images/bocian.jpg";
import frog from "./images/frog.jpg";
import "./animalsComponent.style.css";

const AnimalsComponent = () => {
  const [food, setFood] = useState(null);

  const onClickHandler = (food) => {
    setFood(food);
  };

  return (
    <div>
      <h1 className="animal-title">What do they eat???</h1>
      <div className="animals-component">
        <img
          className="animal-img"
          src={anteater}
          alt="animal"
          onClick={() => onClickHandler(ant)}
        />
        <img
          className="animal-img"
          src={probocsis}
          alt="animal"
          onClick={() => onClickHandler(leaves)}
        />
        <img
          className="animal-img"
          src={cat}
          alt="animal"
          onClick={() => onClickHandler(mouse)}
        />
        <img
          className="animal-img"
          src={hedgehog}
          alt="animal"
          onClick={() => onClickHandler(apple)}
        />
        <img
          className="animal-img"
          src={stork}
          alt="animal"
          onClick={() => onClickHandler(frog)}
        />
      </div>
      {food && <img src={food} className="food" alt="animal food" />}
    </div>
  );
};

export default AnimalsComponent;
