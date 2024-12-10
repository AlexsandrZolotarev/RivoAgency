import React, { Component } from "react";
import s from "./Profile.module.css";
export class ProfileStatus extends Component {
  state = {
    editMode: true,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };
  updateStatus = (input) => {
    this.props.updateText(input);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
    this.updateStatus(e);
  };
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status)
    {
      this.setState({
        status:this.props.status, 
      })
    }
  }
  render() {
    return (
      <div className={s.status}>
        {this.state.editMode && (
          <div className={s.status__span}>
            <span onDoubleClick={this.activateEditMode}>
              {this.state.status || "My status"}
            </span>
          </div>
        )}
        {!this.state.editMode && (
          <div className={s.status__input}>
            <input
              name="status"
              onChange={this.onStatusChange.bind(this)}
              value={this.state.status}
              autoFocus={true}
              onBlur={this.activateEditMode}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
