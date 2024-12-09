import React from "react";
import s from "./Projects.module.css";
import image1 from "../../assets/Projects/img-1.webp";
import image2 from "../../assets/Projects/img-2.webp";
import image3 from "../../assets/Projects/img-3.webp";

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
          <ul id="cards">
            <li className={s.card} id="card_1">
              <div className={s.card__content}>
                <div>
                  <h2>Mens</h2>
                  <p>
                    <a href="/RivoAgency" className={s.btn}>
                      Read more
                    </a>
                  </p>
                </div>
                <picture>
                  <img
                    srcset={image1}
                    alt="Project"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </li>
            <li className={s.card} id="card_2">
              <div className={s.card__content}>
                <div>
                  <h2>Saltmine</h2>
                  <p>
                    <a href="/RivoAgency" className={s.btn}>
                      Read more
                    </a>
                  </p>
                </div>

                <picture>
                  <img
                    srcset={image2}
                    alt="Project"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </li>
            <li className={s.card} id="card_3">
              <div className={s.card__content}>
                <div>
                  <h2>Haul Cars</h2>
                  <p>
                    <a href="/RivoAgency" className={s.btn}>
                      Read more
                    </a>
                  </p>
                </div>

                <picture>
                  <img
                    srcset={image3}
                    alt="Project"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </li>
            <li className={s.card} id="card_4">
              <div className={s.card__content}>
                <div>
                  <h2>Skyline Energy</h2>
                  <p>
                    <a href="/RivoAgency" className={s.btn}>
                      Read more
                    </a>
                  </p>
                </div>

                <picture>
                  <img
                    srcset={image1}
                    alt="Project"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </li>
            <li className={s.card} id="card_5">
              <div className={s.card__content}>
                <div>
                  <h2>Jotul</h2>
                  <p>
                    <a href="/RivoAgency" className={s.btn}>
                      Read more
                    </a>
                  </p>
                </div>
                <picture>
                 
                  <img
                    srcset={image3}
                    alt="Project"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </li>
          </ul>
          <section className={s.wrapper_Projects__body}>
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
