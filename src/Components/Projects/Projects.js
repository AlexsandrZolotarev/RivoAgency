import React from "react";
import s from "./Projects.module.css";
import mens from "..//img/Projects/Mens.png";
import haulCars from "..//img/Projects/HaulCars.png";
import jotul from "..//img/Projects/Jotul.png";
import saltmine from "..//img/Projects/Saltmine.png";
import skylineEnergy from "..//img/Projects/SkylineEnergy.png";
import { MdArrowOutward } from "react-icons/md";

export default function Projects() {
  return (
    <div className={s.wrapper_Projects}>
      <div className={s.wrapper_Projects_container}>
        <div className={s.wrapper_Projects__title}>
          <p>Projects</p>
          <p>Projects</p>
        </div>
        <div className={s.wrapper_Projects__body}>
          <div className={s.wrapper_Projects__container}>
            <div className={s.wrapper_Projects__project}>
              <div className={s.wrapper_Projects_body_title}>
                <p>Mens</p>
              </div>
              <div className={s.wrapper_Projects_body_project}>
                <img alt="Mens" src={mens} loading="lazy"></img>
              </div>
            </div>

            <div className={s.wrapper_Projects__project}>
              <div className={s.wrapper_Projects_body_title}>
                <p>Saltmine</p>
              </div>
              <div className={s.wrapper_Projects_body_project}>
                <img alt="Saltmine" src={saltmine} loading="lazy"></img>
              </div>
            </div>

            <div className={s.wrapper_Projects__project}>
              <div className={s.wrapper_Projects_body_title}>
                <p>Haul Cars</p>
              </div>
              <div className={s.wrapper_Projects_body_project}>
                <img alt="Haul Cars" src={haulCars} loading="lazy"></img>
              </div>
            </div>

            <div className={s.wrapper_Projects__project}>
              <div className={s.wrapper_Projects_body_title}>
                <p>Skyline Energy</p>
              </div>
              <div className={s.wrapper_Projects_body_project}>
                <img
                  alt="Skyline Energy"
                  src={skylineEnergy}
                  loading="lazy"
                ></img>
              </div>
            </div>

            <div className={s.wrapper_Projects__project}>
              <div className={s.wrapper_Projects_body_title}>
                <p>Jotul</p>
              </div>
              <div className={s.wrapper_Projects_body_project}>
                <img alt="Jotul" src={jotul} loading="lazy"></img>
              </div>
            </div>
          </div>
        </div>
        <div className={s.wrapper_Projects__button}>
          <button>Show more cases</button>
          <MdArrowOutward />
        </div>
      </div>
    </div>
  );
}
