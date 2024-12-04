import React from "react";
import s from "./Login.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { checkingForRegistration } from "../../localStorage/localStorage";
import { useNavigate } from "react-router-dom";
import { Preloader } from "../../preloader/preloader";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(24, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(24, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
let LoginForm = (props) => {
  const navigate = useNavigate();
  return (
    <Formik
      className={s.login_form}
      initialValues={{name: "" , email: "", password: ""}}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        values.id = Math.random().toString(16).slice(2);
        props.setAuthUser(values);
        Preloader();
        navigate('/Profile');
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={s.grid}>
            <Field type="name" name="name" placeholder="Enter Name" />
            <ErrorMessage
              name="name"
              component="div"
              className={s.error}
            />
          </div>
          <div className={s.grid}>
            <Field type="email" name="email" placeholder="Enter Email" />
            <ErrorMessage
              name="email"
              component="div"
              className={s.error}
            />
          </div>
          <div className={s.grid}>
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" component="div" className={s.error}/>
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
        <h1>{(checkingForRegistration()) ? "Login" : "Registration"}</h1>
        <h2>{(checkingForRegistration())? "Login" : "Registration"}</h2>
        <LoginForm {...props} />
      </div>
    </section>
  );
};

export default Login;
