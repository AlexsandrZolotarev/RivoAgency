import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/redux-store";
import { Provider } from "react-redux";

function Preloader() {
    setTimeout(() => {
      var preloader = document.getElementById("page-preloader");
      if (!preloader.classList.contains("done"))
        preloader.classList.add("done");
    }, 1000);

}
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App/>
        <Preloader/>
        </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
