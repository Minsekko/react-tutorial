import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Root from "./Root.js";
import TodoManager from "./TodoManager.js";
import Receiver from "./Receiver.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Receiver />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
