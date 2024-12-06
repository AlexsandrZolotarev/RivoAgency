import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import store from "./Redux/redux-store";
import { Provider } from "react-redux";

export function AnimationHomePage() {
  if(!document.getElementById("HomeTitle")) return;
  let homeTitleChilden = document.getElementById("HomeTitle").children;
  setTimeout(() => {
    Array.from(homeTitleChilden).forEach((e, index) => {
      if (index % 2 === 0) e.style.animation = "animatinRight 2.2s forwards";
      else e.style.animation = "animatinLeft 2.2s forwards";
    });
  }, 100);
}
export function Preloader() {
  setTimeout(() => {
    var preloader = document.getElementById("page-preloader");
    if (preloader.classList.contains("done"))
      preloader.classList.remove("done");
    if (!preloader.classList.contains("done")) preloader.classList.add("done");
    AnimationHomePage();
  }, 1000);
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <Preloader />
      </Provider>
    </React.StrictMode>
  </HashRouter>
);
