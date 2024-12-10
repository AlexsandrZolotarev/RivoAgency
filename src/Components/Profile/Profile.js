import React from "react";
import s from "./Profile.module.css";
import { MdOutlinePhotoCamera } from "react-icons/md";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import ProfileStatus from "./ProfileStatus";
import { OnPreloaderPage} from "../../loader";

let Profile = (props) => {
  const dialog = React.createRef();
  var user = JSON.parse(localStorage.user);

  const handleClickOpen = () => {
    dialog.current.showModal();
  };
  const handleClickClose = () => {
    dialog.current.close();
  };
  const onTextchange = (input) => {
    props.updateText(input);
  };
  const onPhoneChange = (value) => {
    props.updatePhone(value);
  };
  const onProfilechange = () => {
    dialog.current.close();
    props.changeProfile();
    OnPreloaderPage();
  };
  return (
    <section className={s.profile}>
      <div className={s.profile_container}>
      <article className={s.profile_wrapper}>
        <div className={s.profile_avatar}>
          <div className={s.profile_image}>
            <img src={user.img} alt="MyProfileImage"></img>
            <div className={s.profile__id}>
              <p>ID</p>
              <p>{props.profile.id}</p>
            </div>
            <div className={s.profile__status}>
              <ProfileStatus status={props.profile.status} updateText= {props.updateText} />
            </div>
            <div className={s.profile_file_input}>
              <input
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
        <dialog ref={dialog} className={s.dialog}>
          <p>Are you sure you want to change the profile?</p>
          <div className={s.dialog__buttons}>
            <button type="submit" onClick={onProfilechange}>
              Yes
            </button>
            <button type="submit" onClick={handleClickClose}>
              No
            </button>
          </div>
        </dialog>
        <div className={s.profile_body}>
          <h2>Personal Information</h2>
          <div className="profile__information">
            <input
              onChange={onTextchange.bind(this)}
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              maxLength={24}
              value={props.profile.name}
            ></input>
            <p>Name</p>
          </div>
          <div className="profile__information">
            <input
              tabIndex="0"
              onChange={onTextchange.bind(this)}
              type="date"
              id="birthDate"
              name="birthDate"
              placeholder="Enter Birth Date"
              value={props.profile.birthDate}
            ></input>
            <p>Birth Date</p>
          </div>
          <h2>Contact Information</h2>
          <div className="profile__information">
            <input
              tabIndex="0"
              onChange={onTextchange.bind(this)}
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              maxLength={30}
              value={props.profile.email}
            ></input>
            <p>Email</p>
          </div>
          <div className="profile__information">
            <PhoneInputWithCountrySelect
              name="phoneInputWithCountrySelect"
              className={s.phone_input}
              rules={{ required: true }}
              value={props.profile.phone}
              onChange={onPhoneChange.bind(this)}
            />
            <p>Phone Number</p>
          </div>

          <div className={s.profile_button}>
            <button onClick={handleClickOpen}>Change</button>
          </div>
        </div>
      </article>
      </div>
    </section>
  );
};

export default Profile;
