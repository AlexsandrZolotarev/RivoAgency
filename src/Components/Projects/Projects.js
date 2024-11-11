import React from "react";
import s from "./Projects.module.css";
import mens from "../../assets/Projects/Mens.webp";
import mens700 from "../../assets/Projects/Mens700.webp";
import mens320 from "../../assets/Projects/meda320.webp";
import haulCars from "../../assets/Projects/HaulCars.webp";
import haulCars700 from "../../assets/Projects/HaulCars700.webp";
import haulCars320 from "../../assets/Projects/haul320.webp";
import jotul from "../../assets/Projects/Jotul.webp";
import jotul700 from "../../assets/Projects/Jotul700.webp";
import jotul320 from "../../assets/Projects/Jotul320.webp";
import saltmine from "../../assets/Projects/Saltmine.webp";
import saltmine700 from "../../assets/Projects/Saltmine700.webp";
import saltmine320 from "../../assets/Projects/saltmine320.webp";
import skylineEnergy from "../../assets/Projects/SkylineEnergy.webp";
import skylineEnergy700 from "../../assets/Projects/Skyline700.webp";
import skylineEnergy320 from "../../assets/Projects/Energy320.webp";

import { MdArrowOutward } from "react-icons/md";
class Projects extends React.Component {
  render() {
    return (
      <section className={s.wrapper_Projects}>
        <div className={s.wrapper_Projects_container}>
          <header className={s.wrapper_Projects__title}>
            <h2>Projects</h2>
            <h2>Projects</h2>
          </header>
          <section className={s.wrapper_Projects__body}>
            <article className={s.wrapper_Projects__project}>
              <header className={s.wrapper_Projects_body_title}>Mens</header>
              <div className={s.wrapper_Projects_body_project}>
              <picture>
              <source srcset={mens} type="image/jpg" media="(min-width: 768px)"/>
                <source srcset={mens700} type="image/jpg" media="(max-width: 768px)"/>
                <source srcset={mens320} type="image/jpg" media="(max-width: 375px)"/>
                <img srcset={mens} alt="Project" loading="lazy" decoding="async"/>
              </picture>
              </div>
            </article>

            <article className={s.wrapper_Projects__project}>
              <div className={s.wrapper_Projects_body_title}>
                <header>Saltmine</header>
              </div>
              <div className={s.wrapper_Projects_body_project}>
              <picture>
              <source srcset={saltmine} type="image/jpg" media="(min-width: 768px)"/>
                <source srcset={saltmine700} type="image/jpg" media="(max-width: 768px)"/>
                <source srcset={saltmine320} type="image/jpg" media="(max-width: 375px)"/>
                <img srcset={saltmine} alt="Project" loading="lazy" decoding="async"/>
              </picture>
              </div>
            </article>

            <article className={s.wrapper_Projects__project}>
              <div className={s.wrapper_Projects_body_title}>
                <header>Haul Cars</header>
              </div>
              <div className={s.wrapper_Projects_body_project}>
              <picture>
              <source srcset={haulCars} type="image/jpg" media="(min-width: 768px)"/>
                <source srcset={haulCars700} type="image/jpg" media="(max-width: 768px)"/>
                <source srcset={haulCars320} type="image/jpg" media="(max-width: 375px)"/>
                <img srcset={haulCars} alt="Project" loading="lazy" decoding="async"/>
              </picture>
              </div>
            </article>

            <article className={s.wrapper_Projects__project}>
              <div className={s.wrapper_Projects_body_title}>
                <header>Skyline Energy</header>
              </div>
              <div className={s.wrapper_Projects_body_project}>
              <picture>
              <source srcset={skylineEnergy} type="image/jpg" media="(min-width: 768px)"/>
                <source srcset={skylineEnergy700} type="image/jpg" media="(max-width: 768px)"/>
                <source srcset={skylineEnergy320} type="image/jpg" media="(max-width: 375px)"/>
                <img srcset={skylineEnergy} alt="Project" loading="lazy" decoding="async"/>
              </picture>
              </div>
            </article>

            <article className={s.wrapper_Projects__project}>
              <div className={s.wrapper_Projects_body_title}>
                <header>Jotul</header>
              </div>
              <div className={s.wrapper_Projects_body_project}>
              <picture>
              <source srcset={jotul} type="image/jpg" media="(min-width: 768px)"/>
                <source srcset={jotul700} type="image/jpg" media="(max-width: 768px)"/>
                <source srcset={jotul320} type="image/jpg" media="(max-width: 375px)"/>
                <img srcset={jotul} alt="Project" loading="lazy" decoding="async"/>
              </picture>
              </div>
            </article>
            <div className={s.wrapper_Projects__button}>
              <button>Show more cases</button>
              <MdArrowOutward />
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Projects;
