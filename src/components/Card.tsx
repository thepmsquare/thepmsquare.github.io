import React, { useState } from "react";
import Flippy, { FrontSide, BackSide } from "@thepmsquare/react-flippy";
import FirstSide from "./FirstSide";
import SecondSide from "./SecondSide";
import "../stylesheets/Card.css";

const Card = () => {
  const [isFlipped, changeIsFlipped] = useState(true);
  const toggleFlip = () => {
    changeIsFlipped((oldIsFlipped) => !oldIsFlipped);
  };
  return (
    <Flippy
      isFlipped={isFlipped}
      flipOnClick={false}
      flipDirection="horizontal"
      className="Card"
    >
      <BackSide className="Card-side">
        <FirstSide toggleFlip={toggleFlip} />
      </BackSide>
      <FrontSide className="Card-side">
        <SecondSide toggleFlip={toggleFlip} />
      </FrontSide>
    </Flippy>
  );
};

export default Card;
