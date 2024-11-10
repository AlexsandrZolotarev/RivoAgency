import React from "react";
import s from "./Projects.module.css";
import mens from "../../assets/Projects/Mens.webp";
import haulCars from "../../assets/Projects/HaulCars.webp";
import jotul from "../../assets/Projects/Jotul.webp";
import saltmine from "../../assets/Projects/Saltmine.webp";
import skylineEnergy from "../../assets/Projects/SkylineEnergy.webp";
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
                <a className={s.wrapper_Projects__project}>
                  <h3>Mens</h3>
                  <div className={s.wrapper_Projects_body_project}>
                    <picture>
                      <img alt="Mens" src={mens} loading="lazy"></img>
                    </picture>
                  </div>
                </a>

                <article className={s.wrapper_Projects__project}>
                  <div className={s.wrapper_Projects_body_title}>
                    <header>Saltmine</header>
                  </div>
                  <div className={s.wrapper_Projects_body_project}>
                    <img alt="Saltmine" src={saltmine} loading="lazy"></img>
                  </div>
                </article>

                <article className={s.wrapper_Projects__project}>
                  <div className={s.wrapper_Projects_body_title}>
                    <header>Haul Cars</header>
                  </div>
                  <div className={s.wrapper_Projects_body_project}>
                    <img alt="Haul Cars" src={haulCars} loading="lazy"></img>
                  </div>
                </article>

                <article className={s.wrapper_Projects__project}>
                  <div className={s.wrapper_Projects_body_title}>
                    <header>Skyline Energy</header>
                  </div>
                  <div className={s.wrapper_Projects_body_project}>
                    <img
                      alt="Skyline Energy"
                      src={skylineEnergy}
                      loading="lazy"
                    ></img>
                  </div>
                </article>

                <article className={s.wrapper_Projects__project}>
                  <div className={s.wrapper_Projects_body_title}>
                    <header>Jotul</header>
                  </div>
                  <div className={s.wrapper_Projects_body_project}>
                    <img alt="Jotul" src={jotul} loading="lazy"></img>
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
