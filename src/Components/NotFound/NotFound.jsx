import React from "react";
import s from "./NotFound.module.css";
import chinchilla from "./../../assets/NotFound/chinchilla illustration.svg";
import Element from "./../../assets/NotFound/Element.svg";
import Vector from "./../../assets/NotFound/Vector 5.svg";

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
            alt="Изображение бело-желтой шиншилы"
            src={chinchilla}
            className={s.chinchilla}
            aria-hidden="true"
            loading="lazy"
          ></img>
        <header>
          <h2>Thank you!</h2>
          <p>Our manager will contact you soon.</p>
        </header>
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
