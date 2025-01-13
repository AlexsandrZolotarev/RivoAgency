import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {setAuthUser } from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    userImage: state.auth.userImage,
  };
};
export default connect(mapStateToProps, {
  setAuthUser,
})(HeaderContainer);
