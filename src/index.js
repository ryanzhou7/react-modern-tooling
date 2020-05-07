import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import App from "./App";

// Strict mode shows deprecated warnings in the console for dev mode
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
