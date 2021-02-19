import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Pages from "./pages";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Pages />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
