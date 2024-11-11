import React from "react";
import s from "./Stack.module.css";
import webLavarel from "../../assets/Stack/Web/Laravel_icon.svg";
import webPHP from "../../assets/Stack/Web/PHP_icon.svg";
import webJquery from "../../assets/Stack/Web/jQuery_icon.svg";
import webJs from "../../assets/Stack/Web/JS_icon.svg";
import webJava from "../../assets/Stack/Web/Java_icon.svg";
import webBootstrap from "../../assets/Stack/Web/Bootstrap_icon.svg";
import webWordPress from "../../assets/Stack/Web/WP_icon.svg";
import webSql from "../../assets/Stack/Web/MySQL_icon.svg";
import webVue from "../../assets/Stack/Web/Vue_js_icon.svg";

import mobileSwift from "../../assets/Stack/Mobile/Swift_icon.svg";
import mobileReact from "../../assets/Stack/Mobile/React_native_icon.svg";
import mobileNodeJs from "../../assets/Stack/Mobile/Node_js_icon.svg";
import mobileAws from "../../assets/Stack/Mobile/Aws_icon.svg";
import mobileGraph from "../../assets/Stack/Mobile/GraphQL_icon.svg";
import mobileRedux from "../../assets/Stack/Mobile/Redux_icon.svg";

import devAws from "../../assets/Stack/Devops/Aws_icon.svg";
import devGoogle from "../../assets/Stack/Mobile/Google_cloud_icon.svg";
let Stack = () => {
  return (
    <section className={s.stack}>
      <header className={s.stack__title}>
        <h2>stack</h2>
        <h2>stack</h2>
      </header>
      <div className={s.stack__body__container}>
        <article className={s.stack__body}>
          <div className={s.stack__body__title}>
            <h2>Web Development</h2>
            <div className={s.stack__body__items}>
              <a href="" className={s.stack__item}>
                <img src={webLavarel} alt="Значок Laravel" />
                <h2>Laravel</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={webPHP} alt="Значок PHP" />
                <h2>PHP</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={webJquery} alt="Значок jQuery" />
                <h2>jQuery</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={webJs} alt="Значок JavaScript" />
                <h2>JavaScript</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={webJava} alt="Значок Java" />
                <h2>Java</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={webBootstrap} alt="Значок Bootstrap" />
                <h2>Bootstrap</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={webWordPress} alt="Значок WordPress" />
                <h2>WordPress</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={webSql} alt="Значок MySQL" />
                <h2>MySQL</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={webVue} alt="Значок Vue.js" />
                <h2>Vue.js</h2>
              </a>
            </div>
          </div>
        </article>
        <article className={s.stack__body}>
          <div className={s.stack__body__title}>
            <h2>Mobile Development</h2>
            <div className={s.stack__body__items}>
              <a href="" className={s.stack__item}>
                <img src={mobileSwift} alt="Значок Swift" />
                <h2>Swift</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={mobileReact} alt="Значок React Native" />
                <h2>React Native</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={mobileNodeJs} alt="Node js" />
                <h2>Node js</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={mobileAws} alt="Значок AWS Amplify" />
                <h2>AWS Amplify</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={mobileGraph} alt="Значок GraphQL" />
                <h2>GraphQL</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={mobileRedux} alt="Значок Redux" />
                <h2>Redux</h2>
              </a>
            </div>
          </div>
        </article>
        <article className={s.stack__body}>
          <div className={s.stack__body__title}>
            <h2>Devops</h2>
            <div className={s.stack__body__items}>
              <a href="" className={s.stack__item}>
                <img src={devAws} alt="Значок Amazone AWS" />
                <h2>Amazone AWS</h2>
              </a>
              <a href="" className={s.stack__item}>
                <img src={devGoogle} alt="Значок Google Cloud" />
                <h2>Google Cloud</h2>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Stack;
