import React from "react";
import { connect } from "react-redux";
import {addProfile, changeProfile, updatePhone, updateText} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import { withLoginRedirect } from "../../hoc/withLoginRedirect";
 

class ProlifeContainer extends React.Component {
  componentDidMount()
  {
    this.props.addProfile();
  }
  render() {
    return <Profile {...this.props} />;
  }
}
let RedirectComponent = withLoginRedirect(ProlifeContainer);
const mapStateToProps = (state) => {
  return {
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.profile.status,
  };
};
export default connect(mapStateToProps, {
  updateText,
  changeProfile,
  addProfile,
  updatePhone,
})(RedirectComponent);