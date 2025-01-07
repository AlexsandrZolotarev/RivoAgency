import React from "react";
import ContactsUs from "./../../assets/img/Contact us big.webp";
import Arrow from "./../../assets/Icons/ArrowBig_icon.webp";
import s from "./ContactUs.module.css";
import { NavLink } from "react-router-dom";
function ContactUs() {
  ;
  return (
    <NavLink to={"/Contacts"} title="Contacts"  
    className={s.ContactUs}
    href="Contacts"
    aria-label="Contacts"
    id="ContactUs">
      <img alt="" src={ContactsUs} aria-hidden="true"></img>
      <img alt="" src={Arrow} aria-hidden="true"></img>
    </NavLink>
  );
}
export default ContactUs;
