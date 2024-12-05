import React from "react";
import s from "./Profile.module.css";
import Login from "../Login/Login";
let Profile = () => {
  if (!localStorage.length) {
    return <Login />;
  }
  var user = JSON.parse(localStorage.user);
  return (
    <section className={s.profile}>
      <article className={s.profile_wrapper}>
        <div className={s.profile_avatar}>
          <div className={s.profile_image}>
            <img src={JSON.parse(localStorage.user).img} alt="MyProfileImage"></img>
            <div className={s.profile_file_input}>
            <label></label>
            <input type="text" name="url"></input>
            </div>
           
          </div>
          <div className={s.profile_registation__date}>
            <p>Registration date</p>
            <p>{user.registrationDate}</p>
          </div>
        </div>
        <div className={s.profile_body}>
          <h2>Personal Information</h2>
          <div className={s.name + ' profile__information'}>
            <p>{user.name}</p>
            <p>Name</p>
          </div>
          <div className={s.email + ' profile__information'}>
            <p>{user.email}</p>
            <p>Email</p>
          </div>
          <div className={s.status + ' profile__information'}>
          <p>{user.email}</p>
          <p>Status</p>
          </div>
          <div className={s.id + ' profile__information'}>
            <p>{user?.id}</p>
            <p>ID</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Profile;
