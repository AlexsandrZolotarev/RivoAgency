import React from "react";
import { connect } from "react-redux";
import {addProfile, changeProfile, updateText} from "../../Redux/profile-reducer";
import Profile from "./Profile";

class ProlifeContainer extends React.Component {
  componentDidMount()
  {
    this.props.addProfile();
  }
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
  addProfile,
})(ProlifeContainer);