import React from "react";
import s from "./IndustryExpertise.module.css";
import element from '../../assets/IndustryExpertise/Element.svg'
let IndustryExpertise = () => {
  return (
    <section className={s.industry} id="IE">
      <header className={s.industry__title}>
        <h2>Industry Expertise</h2>
        <h2>Industry Expertise</h2>
      </header>
      <div className={s.industry__body + " items"}>
        <a href =""  className={s.industry__item}>
          <h2>Retail & Ecommerce</h2>
        </a>
        <a href =""  className={s.industry__item}>
          <h2>Real Estate</h2>
        </a>
        <a href =""  className={s.industry__item}>
          <h2>Custom CRM</h2>
        </a>
        <a href =""  className={s.industry__item}>
          <h2>Education & e-learning</h2>
        </a>
        <a href =""  className={s.industry__item}>
          <h2>Food & Restaurant</h2>
        </a>
        <a href =""  className={s.industry__item}>
          <h2>Healthcare & Fitness</h2>
        </a>
        <a href =""  className={s.industry__item}>
          <h2>Logistics & Distribution</h2>
        </a>
        <div className={s.industry__element}>
          <img src={element} alt="" aria-hidden="true"/>
        </div>
      </div>
    </section>
  );
};
export default IndustryExpertise;
