import React from "react";
import logoDark from "./../../assets/Header/LogotypeDark.svg";
import logoLight from "./../../assets/Header/LogotypeLight.svg";
import { scaleRotate as Menu } from "react-burger-menu";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import "./MenuBurger.css";
import { Navigate, NavLink } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { checkingForRegistration } from "../../localStorage/localStorage";

let MenuBurger = (props) => {
  return (
    <Menu
      {...props}
      right
      width={"100%"}
      isOpen={false}
      onStateChange={props.toogleBurger}
    >
      <div>
      <NavLink to={""} className="link" reloadDocument>
      <img
          alt="logotype"
          src={
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? logoDark
              : logoLight
          }
        />
      </NavLink>
        
      </div>
      <div className="burger__body">
        <nav>
          <ul>
            <li>
              <NavLink to={"/RivoAgancy"} className="link" reloadDocument>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Services"}
                className="link"
                reloadDocument
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Projects"}
                className="link"
                reloadDocument
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Contacts"}
                className="link"
                reloadDocument
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Careers"}
                className="link"
                reloadDocument
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Orders"}
                className="link"
                reloadDocument
              >
                Orders
              </NavLink>
            </li>
            <li>
              <div className="login__form">
              <div className="login__form_container">
               
              <NavLink
                to={(checkingForRegistration()) ? "Profile": "Login"}
                className="link"
                reloadDocument
              > 
              {(checkingForRegistration())? "Profile": "Login"}
              </NavLink>
              <BiLogIn />
              </div>
                
              </div>
            </li>
          </ul>
        </nav>
        <nav>
          <div className="contactsBodyTextContact">
            <div className="contactsBodyTextContact__title">
              <p>Let’s make something that matters.</p>
            </div>
            <div className="contactsBodyTextContact__street">
              <p>Rivne, A. Melnyk str.1, 33016</p>
            </div>
            <div className="contactsBodyTextContact__phone">
              <a href="tel:+79998887766">+7 999 888 77 66</a>
              <a href="tel:+79998887765">+7 999 888 77 65</a>
            </div>
            <ul className="contactsBodyTextContact__icons">
              <li>
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="nofollow"
                  aria-label="Наша компания в facebook"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="nofollow"
                  aria-label="Наша компания в instagram"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="nofollow"
                  aria-label="Наша компания в X"
                >
                  {" "}
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="nofollow"
                  aria-label="Наша компания в VK"
                >
                  {" "}
                  <SlSocialVkontakte />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="copyright">
        <p>2024 © Rivo Agency</p>
        <p>Privacy Policy & Term of Use</p>
      </div>
    </Menu>
  );
};

export default MenuBurger;
