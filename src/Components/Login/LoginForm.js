import React from "react";
import s from "./LoginForm.module.css";
let Login = (props) => {
  return (
    <div className={s.Form}>
      <form
        action="http://localhost:8080/api/v1/users/registration"
        method="post"
      >
        <label>
          EMAIL
          <input type="text" name="name" required />
        </label>
        <label>
         Name
          <input type="text" name="order" required />
        </label>
        <label>
          Пароль
          <input type="text" name="order" required />
        </label>
        <button type="submit">Зарегестрироваться</button>
      </form>
    </div>
  );
};

export default Login;
