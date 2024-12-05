import React from "react";
import s from "./Profile.module.css";
import Login from "../Login/Login";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { Preloader } from "../..";
let Profile = (props) => {
  let profileImage = React.createRef();
  const onTextchange = (input) => {
    props.updateText(input);
  };
  const onProfilechange = () => {
    console.log(profileImage);
    props.changeProfile();
    Preloader();
  };
  if (!localStorage.length) {
    return <Login />;
  }
  var user = JSON.parse(localStorage.user);
  return (
    <section className={s.profile}>
      <article className={s.profile_wrapper}>
        <div className={s.profile_avatar}>
          <div className={s.profile_image}>
            <img
              src={JSON.parse(localStorage.user).img}
              alt="MyProfileImage"
            ></img>
            <div className={s.id + " profile__information"}>
              <p>ID</p>
              <p>{props.profile.id}</p>
            </div>
            <div className={s.profile_file_input}>
              <input
                ref={profileImage}
                onChange={onTextchange.bind(this)}
                type="text"
                name="img"
                value={props.profile.img}
              ></input>
              <MdOutlinePhotoCamera />
            </div>
          </div>
          <div className={s.profile_registation__date}>
            <p>Registration date</p>
            <p>{user.registrationDate}</p>
          </div>
        </div>
        <div className={s.profile_body}>
          <h2>Personal Information</h2>
          <div className={s.name + " profile__information"}>
            <input
              onChange={onTextchange.bind(this)}
              type="text"
              id="name"
              name="name"
              maxLength={24}
              value={props.profile.name}
            ></input>
            <p>Name</p>
          </div>
          <div className={s.email + " profile__information"}>
            <input
              tabIndex="0"
              onChange={onTextchange.bind(this)}
              type="email"
              id="email"
              name="email"
              maxLength={30}
              value={props.profile.email}
            ></input>
            <p>Email</p>
          </div>
          <div className={s.status + " profile__information"}>
            <input
              onChange={onTextchange.bind(this)}
              type="status"
              id="status"
              name="status"
              maxLength={20}
              value={props.profile.status}
            ></input>
            <p>Status</p>
          </div>
          <div className={s.profile_button}>
            <button onClick={onProfilechange}>Change</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Profile;
