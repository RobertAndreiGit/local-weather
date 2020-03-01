import React from "react";
import ReactDOM from "react-dom";

import WeatherBar from "../components/WeatherBar";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Local Weather</h1>
      <WeatherBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
