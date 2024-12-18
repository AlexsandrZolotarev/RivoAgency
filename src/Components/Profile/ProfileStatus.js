import React, { useEffect, useState } from "react";
import s from "./Profile.module.css";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(true);
  const [status, setStatus] = useState(props.status);

  // useEffect(() =>{
  //   console.log(1);
  //   setStatus(props.status);
  // },[props.status])


  const activateEditMode = () => {
    setEditMode(false)
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
    props.updateText(e);
  };
  const diactivateEditMode = () => {
    setEditMode(true);
   // props.updateStatus(e);
  };
  return (
    <div className={s.status}>
      {editMode &&(
        <div className={s.status__span}>
          <span onDoubleClick={activateEditMode}>
            {status || "My status"}
          </span>
        </div>
      )}
      {!editMode && (
        <div className={s.status__input}>
          <input
            name="status"
            value={status}
            onChange={onStatusChange.bind(this)}
            onBlur={diactivateEditMode}
            autoFocus={true}
            maxLength={30}
          ></input>
        </div>
      )}
    </div>
  );
};
export default ProfileStatus;
