import React, { Component } from "react";
import Heading from "./Components/Heading/Heading";
import Tiles from "./Containers/Tiles/Tiles";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Tiles />
      </div>
    );
  }
}

export default App;
