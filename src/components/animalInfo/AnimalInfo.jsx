import React, { useState } from "react";
import pandaImg from "../../assets/images/panda.jpg";
import horseImg from "../../assets/images/horse.jpg";
import "./animalInfo.style.css";

const animalImages = [
  { name: "panda", src: pandaImg, alt: "panda in the forest", text: "This is Panda, it eats bamboo and is lazy." },
  {
    name: "horse",
    src: horseImg, alt: "baby horse", text: "This is Horse. Some nations eat horse."
  },
];




function AnimalInfo ()  {


  const [currentImageInfo, setCurrentImageInfo] = useState("")

  const onImageClick = (e) => {
    console.log(e)
    const {accessKey}  = e.target;
    setCurrentImageInfo(animalImages[accessKey].text)
}
const showAllImages = animalImages.map((animal, index)=> {
    return <img src={animal.src} name={animal.name} width="200px" accessKey={index} alt={animal.alt} onClick={onImageClick} />
})

  return (
    <>
      {/* <img src={pandaImg} width="300px" alt="panda" onClick={onImageClick} />
      <img src={horseImg} width="300px" alt="horse" /> */}
      
      {showAllImages}
      <p>{currentImageInfo}</p>
    </>
  );
};

export default AnimalInfo;
