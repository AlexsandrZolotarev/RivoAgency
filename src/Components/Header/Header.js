import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logoDark from "./../../assets/Header/LogotypeDark.svg";
import s from "./Header.module.css";
import { BiLogIn } from "react-icons/bi";
import MenuBurgerContainer from "../MenuBurger/MenuBurgerContainer";
import { checkingForRegistration, getCookie } from "../../cookie/cookie";
import { boolean } from "yup";

let Header = (props) => {
  let [imageUser, setImageUser] = useState(props.userImage);
  let userReg;
  useEffect(() => {
    setImageUser(imageUser);
  }, [imageUser]);

  useEffect(() => {
    userReg = checkingForRegistration();
    props.getUserThunk(userReg);
  });
  return (
    <header className={s.header} id="header">
      <div className={s.container}>
        <div className={s.header__body}>
          <NavLink to={"/RivoAgency"} aria-label="Home Page">
            <img alt="logotype" src={logoDark} />
          </NavLink>
          <div className={s.header__buttons_items}>
            {/* <div className={s.login}>
              {(!+userReg) ? <BiLogIn />
              : 
                <img
                  className={s.profile__image}
                  src={imageUser}
                  alt="MyProfileImage"
                ></img>
              }
              <NavLink to={(!+userReg)
                  ? "Login"
                  : "Profile"}>
                {(userReg === "undefined") ? "Login" : !+userReg
                  ? "Registation" : props.user.username}
              </NavLink>
            </div> */}
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
