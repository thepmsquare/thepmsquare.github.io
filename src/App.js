import React, { Component } from "react";
import Card from "./Card";
import "./stylesheets/App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hello World</h1>
				<Card />
			</div>
		);
	}
}

export default App;
