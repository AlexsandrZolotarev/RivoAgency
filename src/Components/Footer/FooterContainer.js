import Footer from "./Footer";
import { scrollToHeader } from "../../Redux/footer-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {};
};

const FooterContainer = connect(mapStateToProps, {
  scrollToHeader,
})(Footer);

export default FooterContainer;
