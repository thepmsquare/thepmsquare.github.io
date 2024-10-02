import "../stylesheets/Card.css";

import React, { useState } from "react";

import Flippy, { BackSide, FrontSide } from "@thepmsquare/react-flippy";

import FirstSide from "./FirstSide";
import SecondSide from "./SecondSide";

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
