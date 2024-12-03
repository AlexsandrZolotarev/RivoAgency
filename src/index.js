import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/redux-store";
import { Provider } from "react-redux";
import axios from "axios";

function Preloader() {
  setTimeout(() => {
    var preloader = document.getElementById("page-preloader");
    if (!preloader.classList.contains("done")) preloader.classList.add("done");
  }, 1000);
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <Preloader />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

function post1() {
  fetch('http://localhost:8080/api/v1/users/registration', {
    method: 'POST',
    body: JSON.stringify({
        email: "Fifa",
        username: "Fofa",
        password: "ddgg"
    }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    },
 })
}
post1();
