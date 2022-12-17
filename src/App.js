import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather app</h1>
        <Weather />
        <footer>
          This project was coded by Kinga Miśkiewicz and is{" "}
          <a
            href="https://github.com/kiyooteru/weather-app-react"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
