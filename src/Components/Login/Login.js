import React from "react";
import s from "./Login.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
let LoginForm = (props) => {
  let server = (data) => {
    let loginButton = document.getElementById("login_button");
    loginButton.classList.add("loader");
    setTimeout(() => {
      if (loginButton.classList.contains("loader"))
      {
          loginButton.classList.remove("loader");
          loginButton.classList.add("done");
      } 
      axios
      .post("https://alexsandrzolotarev.github.io/api/encrypted.json", {
        props,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    },1000);
    
  };
  return (
    <Formik
      className={s.login_form}
      initialValues={{ email: "", password: "", name: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Email must contain the @ symbol";
        }
        return errors;
      }}
      onSubmit={(values) => {
        server(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={s.grid}>
            <Field type="text" name="name" placeholder="Enter Name" />
          </div>
          <div className={s.grid}>
            <Field type="email" name="email" placeholder="Enter Email" />
            <ErrorMessage
              name="email"
              component="div"
              className={s.error_email}
            />
          </div>
          <div className={s.grid}>
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <div className={s.grid_button}>
            <button type="submit" disabled={isSubmitting} id="login_button">
              Submit
            </button>
          </div>
         
        </Form>
      )}
    </Formik>
  );
};

let Login = (props) => {
  return (
    <section className={s.login}>
      <div className={s.login_wrapper}>
        <h1>{"Login"}</h1>
        <h2>{"Login"}</h2>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
