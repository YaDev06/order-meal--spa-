import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MealContext } from "./reducer/context";
import "./styles/style.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MealContext>
        <App />
      </MealContext>
    </BrowserRouter>
  </React.StrictMode>
);
