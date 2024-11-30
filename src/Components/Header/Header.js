import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { NavLink } from "react-router-dom";
import logoDark from "./../../assets/Header/LogotypeDark.svg";
import logoLight from "./../../assets/Header/LogotypeLight.svg";
import s from "./Header.module.css";
import { BiLogIn } from "react-icons/bi";
let Header = () => {
  return (
    <header className={s.header} id="header">
      <div className={s.container}>
        <div className={s.header__body}>
          <NavLink to={"/RivoAgancy"} aria-label="Home Page">
            <img
              alt="logotype"
              src={
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? logoDark
                  : logoLight
              }
            />
          </NavLink>

          <div className={s.header__buttons_items}>
          <div className={s.login}>
              <NavLink to={"/RivoAgancy/login"}>Login</NavLink>
              <BiLogIn />
            </div>
          <NavLink className={s.makeOrder_Button} to={"/RivoAgancy/Orders"}>
              <p>MAKE ORDER</p>
              <MdArrowOutward className={s.makeOrder_Button__arrow} />
            </NavLink>
          
            {/* <div className={s.header__items}>
              <ul className={s.header__items_items}>
                <li>
                  <NavLink to={"/Services"}>Services</NavLink>
                </li>
                <li>
                  <NavLink to={"/Projects"}>Projects</NavLink>
                </li>
                <li>
                  <nav className={s.Expertise}>
                    Expertise
                    <ul>
                      <ul id={s.submenu}>
                        <li>
                          <NavLink to={"/Healthcare&Fitness"}>
                            Healthcare & Fitness
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Retail&Ecommerce"}>
                            Retail & Ecommerce
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Real&Estate"}>Real & Estate</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Custom&CRM"}>Custom & CRM</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Education&E-Learning"}>
                            Education & E-Learning
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Food&Restaurant"}>
                            Food & Restaurant
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Retail&E-Commerce"}>
                            Retail & E-Commerce
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Logistic&Distribution"}>
                            Logistic & Distribution
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                    <GoChevronDown className="Expertise_GoChevronDown" />
                  </nav>
                </li>
                <li>
                  <NavLink to={"/Contacts"}>Contacts</NavLink>
                </li>
                <li>
                  <NavLink to={"/Careers"} className={s.Hot}>
                    Careers
                  </NavLink>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
