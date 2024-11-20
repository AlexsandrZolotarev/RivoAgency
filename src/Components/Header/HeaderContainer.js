import {
  openBurger,
  closeBurger,
} from "../../Redux/header-reducer";
import { connect } from 'react-redux';
import Header from "./Header";

let mapStateToProps = (state) => {
  return {
    s: state,
  };
};
const HeaderContainer = connect(mapStateToProps, 
  {
    openBurger,
    closeBurger,
  }
)(Header);

export default HeaderContainer;
