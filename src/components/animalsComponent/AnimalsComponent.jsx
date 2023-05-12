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
  const [food, setFood] = useState(0);

  const onClickHandler = (e) => {
    setFood(e);
  };

  return (
    <div>
      <h1 className="animal-title">What do they eat???</h1>
      <div className="animals-component">
        <img
          className="animal-img"
          src={anteater}
          onClick={() => onClickHandler(ant)}
        />
        <img
          className="animal-img"
          src={probocsis}
          onClick={() => onClickHandler(leaves)}
        />
        <img
          className="animal-img"
          src={cat}
          onClick={() => onClickHandler(mouse)}
        />
        <img
          className="animal-img"
          src={hedgehog}
          onClick={() => onClickHandler(apple)}
        />
        <img
          className="animal-img"
          src={stork}
          onClick={() => onClickHandler(frog)}
        />
      </div>
      {food && <img src={food} className="food" />}
    </div>
  );
};

export default AnimalsComponent;
