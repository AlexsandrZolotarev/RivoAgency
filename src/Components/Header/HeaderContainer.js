import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://alexsandrzolotarev.github.io/api/encrypted.json", {
      })
      .then((res) => console.log(res));
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {
  setAuthUserData,
})(HeaderContainer);
