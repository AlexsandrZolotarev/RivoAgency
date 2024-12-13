import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logoDark from "./../../assets/Header/LogotypeDark.svg";
// import logoLight from "./../../assets/Header/LogotypeLight.svg";
import s from "./Header.module.css";
import { BiLogIn } from "react-icons/bi";
import { checkingForRegistration } from "../../localStorage/localStorage";
import MenuBurgerContainer from "../MenuBurger/MenuBurgerContainer";
let Header = (props) => {
  let [imageUser, setImageUser] = useState(props.imageUser);
  
  useEffect(() =>{
    setImageUser(props.imageUser)
  },[props.imageUser]);

  return (
    <header className={s.header} id="header">
      <div className={s.container}>
        <div className={s.header__body}>
          <NavLink to={"/RivoAgency"} aria-label="Home Page">
            <img alt="logotype" src={logoDark} />
          </NavLink>
          <div className={s.header__buttons_items}>
            <div className={s.login}>
              {checkingForRegistration() ? (
                <img
                  className={s.profile__image}
                  src={imageUser}
                  alt="MyProfileImage"
                ></img>
              ) : (
                <BiLogIn />
              )}
              <NavLink to={checkingForRegistration() ? "Profile" : "Login"}>
                {checkingForRegistration()
                  ? JSON.parse(localStorage.user).name
                  : "Registration"}
              </NavLink>
            </div>
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
