import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { store } from "./initStore";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
