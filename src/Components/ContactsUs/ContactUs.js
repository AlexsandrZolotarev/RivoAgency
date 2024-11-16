import React from "react";
import ContactsUs from "./../../assets/img/Contact us big.webp";
import Arrow from "./../../assets/Icons/ArrowBig_icon.webp";
import s from "./ContactUs.module.css";
function ContactUs() {
  return (
    <a
      className={s.ContactUs}
      href="Contacts"
      aria-label="Contacts"
      id="ContactUs"
    >
      <img alt="" src={ContactsUs} aria-hidden="true"></img>
      <img alt="" src={Arrow} aria-hidden="true"></img>
    </a>
  );
}
export default ContactUs;
