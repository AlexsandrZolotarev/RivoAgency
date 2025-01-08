import React from "react";
import { connect } from "react-redux";
import {} from "../../Redux/auth-reducer";
import Profile from "./Profile";
import { withLoginRedirect } from "../../hoc/withLoginRedirect";

class ProlifeContainer extends React.Component {
  render() {
    return <Profile {...this.props} />;
  }
}
let RedirectComponent = withLoginRedirect(ProlifeContainer);
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    userImage:state.auth.userImage
  };
};
export default connect(mapStateToProps, {
})(RedirectComponent);