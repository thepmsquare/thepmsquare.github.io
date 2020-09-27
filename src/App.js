import React, { Component } from "react";
import Card from "./Card";
import "./stylesheets/App.css";

class App extends Component {
  addCss = () => {
    const App = document.querySelector(".App");
    App.style.height = "100vh";
  };
  removeCss = () => {
    const App = document.querySelector(".App");
    App.style.height = "inherit";
  };
  render = () => {
    return (
      <div className="App">
        <Card addCss={this.addCss} removeCss={this.removeCss} />
      </div>
    );
  };
}

export default App;
