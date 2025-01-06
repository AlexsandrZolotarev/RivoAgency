import React, { useState } from "react";
import s from "./Contacts.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { sendMessage } from "../../api/telegram";
import { toast, ToastContainer } from "react-toastify";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too Short!")
    .max(24, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(5, "Too Short!")
    .max(24, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
let ContactsForm = () => {

  const handleSubmit = async({ name, email,message }) => {
    try {
      const mes = `Имя: ${name}, Email: ${email}, Сообщение: ${message}`;
      await sendMessage(mes);
      toast.success("Message Send!");
    } catch (e) {
      toast.error("Promise rejected!");
    }
  };
  return (
    <Formik
      className={s.contactsBodyFieds}
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}>
      {({ isSubmitting }) => (
        <Form className={s.contactsBodyFieds}>
          <p className={s.field}>
            <label htmlFor="name" className={s.field__label}>
              Name
            </label>
            <Field type="name" name="name" placeholder="Enter Name" />
            <ErrorMessage name="name" component="div" className={s.error} />
          </p>
          <p className={s.field}>
            <label htmlFor="email" className={s.field__label}>
              Email
            </label>
            <Field type="email" name="email" placeholder="Enter Email" />
            <ErrorMessage name="email" component="div" className={s.error} />
          </p>
          <p className={s.field}>
            <label htmlFor="message" className={s.field__label}>
              Message
            </label>
            <Field type="message" name="message" placeholder="Enter message" />
            <ErrorMessage name="message" component="div" className={s.error} />
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className={s.contactsButton}
            appearance="primary"
          >
            Submit
          </button>
          <ToastContainer position="top-right" />
        </Form>
      )}
    </Formik>
  );
};

function Contacts(props){

    return (
      <section className={s.contacts} name="Contacts" id="Contacts">
        <header className={s.contactsTitle}>
          <h2>Contacts</h2>
          <h2>Contacts</h2>
        </header>
        <div className={s.contactsBody}>
          <ContactsForm />
          <div className={s.contactsBodyTextContact}>
            <div className={s.contactsBodyTextContact__title}>
              <h2>Let’s make something that matters.</h2>
            </div>
            <div className={s.contactsBodyTextContact__street}>
              <p>Poste Antanimena str.1, 33016</p>
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
                  rel="noreferrer"
                  aria-label="Наша компания в facebook"></a>
                <FaFacebookF />
              </li>
              <li>
                <a
                  href="https://instagram.com "
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Наша компания в instagram"></a>
                <FaInstagram />
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Наша компания в X"
                ></a>
                <FaTwitter />
              </li>
              <li>
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Наша компания в VK"
                ></a>
                <SlSocialVkontakte />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
}

export default Contacts;
