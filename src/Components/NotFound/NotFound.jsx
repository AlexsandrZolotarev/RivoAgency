import React from "react";
import s from "./NotFound.module.css";
import kaput from "./../../assets/NotFound/Kaput.svg";
import Element from "./../../assets/NotFound/Element.svg";
import Vector from "./../../assets/NotFound/Vector 5.svg";
import { NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

let NotFound = () => {
  return (
    <section className={s.notFound}>
      <div className={s.notFound__left_content}>
          <img
            alt="#"
            src={Element}
            className={s.Element}
            aria-hidden="true"
            loading="lazy"
          ></img>
      </div>
      <div className={s.notFound__main_content}>
          <img
            alt="Изображение грустного файлика"
            src={kaput}
            className={s.kaput}
            aria-hidden="true"
            loading="lazy"
          ></img>
        <header>
          <h2>Kaput! Error 404</h2>
          <p>Unfortunately, the page you're looking for doesn't exist or there was an error in the link you followed or typed.</p>
        </header>
        <div className={s.button}>
        <NavLink to={"/"}><button>GO to home page</button></NavLink>
        <MdArrowOutward className={s.button__arrow} />
        </div>
      
        
      </div>
      <div className={s.notFound__right_content}>
          <img
            alt="#"
            src={Vector}
            className={s.Vector}
            aria-hidden="true"
            loading="lazy"
          ></img>
      </div>
    </section>
  );
};
export default NotFound;
