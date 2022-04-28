import React from "react";
import ReactDOM from "react-dom/client";
import { store, history } from "./store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App {...{ store, history }} />
  </React.StrictMode>
);
