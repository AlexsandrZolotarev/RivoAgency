import React, { Component } from 'react'
import Footer from "./Footer";
import { scrollToHeader } from "../../Redux/footer-reducer";
import { connect } from "react-redux";

export class FooterContainer extends Component {
  render() {
    return (
      <Footer/>
    )
  }
}
let mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {
  scrollToHeader,
})(FooterContainer);
