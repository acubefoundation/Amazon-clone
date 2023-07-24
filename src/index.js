import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { ProvideState, initialValue, myReducer } from "./components/StateContext";

const appElement = React.createElement(
  React.StrictMode,
  {},
  React.createElement(ProvideState, { initialState: initialValue, myReducer },
    React.createElement(App)
  )
);

ReactDOM.render(appElement, document.getElementById("root"));