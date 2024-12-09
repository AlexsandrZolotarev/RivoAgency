import React, { Component } from "react";
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
//   onStatusChange = (e) => 
//   {
//     this.setState({
//         status: e.currentTarget.value,
//       });
//   }
  render() {
    return (
      <div>
        {this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
        {!this.state.editMode && (
          <div>
            <input  value={this.state.status} autoFocus={true} onBlur={this.activateEditMode}></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
