import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/cover.css";
import "./styles/header.css";
import "./styles/about.css";
import "./styles/work.css";
import "./styles/academic.css";
import "./styles/skillslang.css";
import "./styles/college.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
