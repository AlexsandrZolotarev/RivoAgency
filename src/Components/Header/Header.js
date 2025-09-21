import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logoDark from "./../../assets/Header/LogotypeDark.svg";
import s from "./Header.module.css";
import MenuBurgerContainer from "../MenuBurger/MenuBurgerContainer";


function checkedValentinasDay(){
  const date = new Date();
  console.log(date.getMonth());
  return  date.getMonth() === 1 && date.getDate() === 14;
}
function checkedNewYear(){
  const date = new Date();
    console.log(date.getMonth());
  return date.getMonth() === 11 || date.getMonth() === 0;
}

let Header = () => {
  return (
    <header className={s.header} id="header">
      <div className={s.container}>
        <div className={s.header__body}>
          <NavLink to={"/RivoAgency"} aria-label="Home Page" className={(
              (checkedNewYear) ? "NewYear" :
              (checkedValentinasDay) ? "ValentinesDay" :
              ""
            )}>
            <img alt="logotype" src={logoDark} />
          </NavLink>
          <div className={s.header__buttons_items}>
            <NavLink className={s.makeOrder_Button} to={"/Orders"}>
              <p>MAKE ORDER</p>
              <MdArrowOutward className={s.makeOrder_Button__arrow} />
            </NavLink>
            <MenuBurgerContainer
              pageWrapId={"main"}
              outerContainerId={"wrapper"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
