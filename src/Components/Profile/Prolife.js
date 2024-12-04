import React from "react";
import s from "./Profile.module.css";
import Login from "../Login/Login";
let Profile = () => {
  var user = JSON.parse(localStorage.user);
  
  if (!user) {
    return <Login />;
  }
  return (
    <section className={s.profile}>
      <div className={s.profile_wrapper}>
        <div className={s.profile_image}>
          <img src={(localStorage.img) ? localStorage.img : 'https://alexsandrzolotarev.github.io/RivoAgancy/src/assets/NotFound/notFound.webp'}></img>
        </div>
        <div className={s.profile_body}>
          <div className={s.name}>{user.name}</div>
          <div className={s.email}>{user.email}</div>
          <div className={s.status}></div>
          <div className={s.id}>
            <p>ID:{user?.id}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
