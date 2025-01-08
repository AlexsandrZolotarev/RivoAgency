import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import store from "./Redux/redux-store";
import { Provider } from "react-redux";
import { OnPreloaderPage } from "./loader";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <OnPreloaderPage/> 
      </Provider>
    </React.StrictMode>
  </HashRouter>
);