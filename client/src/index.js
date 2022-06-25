import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { DarkModeContextProvider } from "./admin/context/darkModeContext";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
