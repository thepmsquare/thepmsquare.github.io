import React, { Component } from "react";
import { DefaultButton } from "@fluentui/react";
import "./stylesheets/Card.css";

class Card extends Component {
  render = () => {
    return (
      <div className="Card">
        <h1>Card</h1>
        <DefaultButton text="Standard" />
      </div>
    );
  };
}

export default Card;
