import React from "react";
import { connect } from "react-redux";
import {changeProfile, updateText} from "../../Redux/profile-reducer";
import Profile from "./Profile";

class ProlifeContainer extends React.Component {
  render() {
    return <Profile {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.ProfilePage.profile,
  };
};
export default connect(mapStateToProps, {
  updateText,
  changeProfile,
})(ProlifeContainer);