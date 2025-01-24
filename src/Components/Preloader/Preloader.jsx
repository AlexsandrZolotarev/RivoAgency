import React from "react";
import s from "./Preloader.module.css";
let Preloader = () => {
  return (
    <section>
        <div className={s.preloader}>
          <div className={s.loader}></div>
        </div> 
    </section>
  );
};
export default Preloader;
