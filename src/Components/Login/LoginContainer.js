import React from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../../Redux/auth-reducer";
import Login from "./Login";

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {
  setAuthUser,
})(LoginContainer);
