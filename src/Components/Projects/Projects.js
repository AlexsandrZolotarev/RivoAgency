import React from 'react'
import s from './Projects.module.css'
import mens from '..//img/Projects/Mens.png'
import haulCars from '..//img/Projects/HaulCars.png'
import jotul from '..//img/Projects/Jotul.png'
import saltmine from '..//img/Projects/Saltmine.png'
import skylineEnergy from '..//img/Projects/SkylineEnergy.png'
import { MdArrowOutward } from 'react-icons/md'

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
                    Mens
                </div>
                <div className={s.wrapper_Projects_body_project}>
                    <img alt='#'  src={mens}></img>
                </div>
              </div>

              <div className={s.wrapper_Projects__project}>
                <div className={s.wrapper_Projects_body_title}>
                    Saltmine
                </div>
                <div className={s.wrapper_Projects_body_project}>
                    <img alt='#'  src={saltmine}></img>
                </div>
              </div>

              <div className={s.wrapper_Projects__project}>
                <div className={s.wrapper_Projects_body_title}>
                    Haul Cars
                </div>
                <div className={s.wrapper_Projects_body_project}>
                    <img alt='#'  src={haulCars}></img>
                </div>
              </div>

              <div className={s.wrapper_Projects__project}>
                <div className={s.wrapper_Projects_body_title}>
                    <p>Skyline Energy</p>
                </div>
                <div className={s.wrapper_Projects_body_project}>
                    <img alt='#'  src={skylineEnergy}></img>
                </div>
              </div>

              <div className={s.wrapper_Projects__project}>
                <div className={s.wrapper_Projects_body_title}>
                    <p>Jotul</p>
                </div>
                <div className={s.wrapper_Projects_body_project}>
                    <img alt='#'  src={jotul}></img>
                </div>
              </div>
          </div>
        </div>
        <div className={s.wrapper_Projects__button}>
            <button>Show more cases</button>
            <MdArrowOutward/>
        </div>
      </div>
    </div>
  )
}