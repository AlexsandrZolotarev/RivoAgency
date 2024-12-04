import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { NavLink } from "react-router-dom";
import logoDark from "./../../assets/Header/LogotypeDark.svg";
import logoLight from "./../../assets/Header/LogotypeLight.svg";
import s from "./Header.module.css";
import { BiLogIn } from "react-icons/bi";
import { checkingForRegistration } from "../../localStorage/localStorage";
let Header = () => {
  return (
    <header className={s.header} id="header">
      <div className={s.container}>
        <div className={s.header__body}>
          <NavLink to={""} aria-label="Home Page">
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
              <NavLink to={"/login"}>{(checkingForRegistration()) ? "" : "Registration"}</NavLink>
              {(checkingForRegistration()) ? "" : <BiLogIn /> }
            </div>
            <NavLink className={s.makeOrder_Button} to={"/Orders"}>
              <p>MAKE ORDER</p>
              <MdArrowOutward className={s.makeOrder_Button__arrow} />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
