import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import FirstSide from "./FirstSide";
import SecondSide from "./SecondSide";
import "./stylesheets/Card.css";
class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFlipped: true,
		};
	}
	toggleFlip = () => {
		this.setState((curState) => {
			return {
				isFlipped: !curState.isFlipped,
			};
		});
	};
	render() {
		return (
			<Flippy
				isFlipped={this.state.isFlipped}
				flipOnClick={false}
				flipDirection="horizontal"
				className="Card"
			>
				<BackSide className="Card-side">
					<FirstSide toggleFlip={this.toggleFlip} />
				</BackSide>
				<FrontSide className="Card-side">
					<SecondSide toggleFlip={this.toggleFlip} />
				</FrontSide>
			</Flippy>
		);
	}
}

export default Card;
