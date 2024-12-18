import React from "react";
import { connect } from "react-redux";
import { setAuthUser, setUserThunk } from "../../Redux/auth-reducer";
import Login from "./Login";
import { withProfileRedirect } from "../../hoc/withLoginRedirect";

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}
let RedirectComponent = withProfileRedirect(LoginContainer);
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};
export default connect(mapStateToProps, {
  setAuthUser,
  setUserThunk
})(RedirectComponent);
