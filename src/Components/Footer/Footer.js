import React from "react";
import s from "./Footer.module.css";
import Vector from "../../assets/Footer/Vector.svg";
import Ellipse from "../../assets/Footer/Element.svg";
import Cube from "../../assets/Footer/ElementCube.svg";
import { NavLink } from "react-router-dom";
import Scroll from "../../Scroll";
let Footer = () => {
  return (
    <footer className={s.wrapper_Footer} id="Footer">
      <div className={s.wrapper_Footer__BodyMenuItemsWithVector}>
        <div className={s.wrapper_Footer__MenuItemsWithVector}>
          <div className={s.wrapper_Footer__Vector}>
            <img src={Vector} aria-hidden="true" loading="lazy"></img>
          </div>
          <div className={s.wrapper_Footer__menuitems}>
            <nav>
              <ul>
                <li onClick={Scroll}>
                  <NavLink to={"/RivoAgancy"}>HOME</NavLink>
                </li>
                <li onClick={Scroll}>
                  <NavLink to={"/Services"}>Services</NavLink>
                </li>
                <li onClick={Scroll}>
                  <NavLink to={"/Projects"}>Projeсts</NavLink>
                </li>
                <li onClick={Scroll}>
                  <NavLink to={"/Contacts"}>Contaсts</NavLink>
                </li>
                <li onClick={Scroll}>
                  <NavLink to={"/Careers"}>Careers</NavLink>
                </li>
              </ul>
            </nav>
            <div className={s.wrapper_Footer__Copyright}>
              <p>2024 © Rivo Agency</p>
              <p>Privacy Policy & Term of Use</p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.wrapper_Footer__EllipseWithElements}>
        <div className={s.wrapper_Footer__Ellipse}>
          <img src={Ellipse} aria-hidden="true" loading="lazy"></img>
        </div>
        <div className={s.wrapper_Footer__Elements}>
          <img src={Cube} aria-hidden="true" loading="lazy"></img>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
