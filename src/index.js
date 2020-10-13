import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import axios from "axios";
import "./assets/css/reset.css";
import "./assets/css/App.less";
/* IFTRUE_development */
import { AppContainer } from "react-hot-loader";
/* FITRUE_development */

const renderApp = () => {
  ReactDOM.render(
    /* IFTRUE_development */
    <AppContainer>
    /* FITRUE_development */
      <App />
    /* IFTRUE_development */
    </AppContainer>
    /* FITRUE_development */
    , document.getElementById("root")
  );
};
renderApp();
/* IFTRUE_development */
if (module.hot) {
  module.hot.accept(() => {
    renderApp();
  });
}
/* FITRUE_development */
