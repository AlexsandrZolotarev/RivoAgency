import React, { useState } from "react";
import s from "./Contacts.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { BsPaperclip } from "react-icons/bs";
import PhoneInput from "react-phone-number-input/input";

class Contacts extends React.Component {
  constructor(props) {
    super(props)
    this.contact = {
      name: null,
      email: null,
      tel: null,
      message: null,
    }
  }
  
  handleClick = () => {};
  render() {
    return (
      <section className={s.contacts} name="Contacts" id="Contacts">
        <header className={s.contactsTitle}>
          <h2>Contacts</h2>
          <h2>Contacts</h2>
        </header>
        <article className={s.contactsBody}>
          <div className={s.contactsBodyFieds}>
            <div className={s.contactsBodyFieds__name}>
              <p>Name</p>
              <input
                type="text"
                name="name"
                onChange={(e) => this.contact.name}
                pattern="name"
                required
              ></input>
            </div>
            <div className={s.contactsBodyFieds__email}>
              <p>Email</p>
              <input
                type="email"
                name="email"
                ref={this.contact.email}
                pattern=".+@example\.com"
                required
              ></input>
            </div>
            <div className={s.contactsBodyFieds__pnone}>
              <p>Phone</p>
              {/* <input
                type="text"
                name="phone"
                ref={this.contact.tel}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              ></input> */}
              <PhoneInput
               country="US"
      placeholder="Enter phone number"
      />
            </div>
            <div className={s.contactsBodyFieds__message}>
              <p>Message</p>

              <input
                type="text"
                ref={this.contact.message}
                name="message"
              ></input>
            </div>
            <div className={s.contactsBodyFieds__file}>
              <label className={s.inputFile}>
                <input type="file" name="file" />
                <span className={s.inputFileButton}>Attach file</span>
                <BsPaperclip className={s.inputClip} />
              </label>
            </div>
            <button className={s.contactsButton} onClick={this.handleClick}>
              Send Message
            </button>
          </div>

          <div className={s.contactsBodyTextContact}>
            <div className={s.contactsBodyTextContact__title}>
              <h2>Let’s make something that matters.</h2>
            </div>
            <div className={s.contactsBodyTextContact__street}>
              <p>Rivne, A. Melnyk str.1, 33016</p>
            </div>
            <div className={s.contactsBodyTextContact__phone}>
              <a href="tel:+79998887766">+7 999 888 77 66</a>
              <a href="tel:+79998887765">+7 999 888 77 65</a>
            </div>
            <ul className={s.contactsBodyTextContact__icons}>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="nofollow"
                  aria-label="Наша компания в facebook"
                ></a>
                <FaFacebookF />
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="nofollow"
                  aria-label="Наша компания в instagram"
                ></a>
                <FaInstagram />
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="nofollow"
                  aria-label="Наша компания в X"
                ></a>
                <FaTwitter />
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="nofollow"
                  aria-label="Наша компания в VK"
                ></a>
                <SlSocialVkontakte />
              </li>
            </ul>
          </div>
        </article>
      </section>
    );
  }
}

export default Contacts;
