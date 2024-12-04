import React from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../../Redux/auth-reducer";
import Profile from "./Prolife";

class ProlifeContainer extends React.Component {
  render() {
    return <Profile/>;
  }
}
const mapStateToProps = (state) => {
  return {
  };
};
export default connect(mapStateToProps, {
  setAuthUser,
})(ProlifeContainer);