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
                  <NavLink to={"/RivoAgency"} title="Home">Home</NavLink>
                </li>
                <li onClick={Scroll}>
                  <NavLink to={"/Services"} title="Who we are">Who we are</NavLink>
                </li>
                <li onClick={Scroll}>
                  <NavLink to={"/Services"} title="Services">Services</NavLink>
                </li>
                <li>
                  <a href="IE" title="Industry Expertise">Industry Expertise</a>
                </li>
                <li onClick={Scroll}>
                  <NavLink to={"/Careers"} title="Industry Expertise">Careers</NavLink>
                </li>
                <li onClick={Scroll}>
                  <NavLink to={"/Careers"} title="Industry Expertise">Careers</NavLink>
                </li>
                <li onClick={Scroll}>
                  <NavLink to={"/Career"} title="Career">Career</NavLink>
                </li>
                <li onClick={Scroll}>
                  <NavLink to={"/"} title="Blog">Blog</NavLink>
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
