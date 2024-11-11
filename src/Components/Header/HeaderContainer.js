import {
  openBurgerActionCreator,
  closeBurgerActionCreator,
} from "../../Redux/header-reducer";
import { connect } from 'react-redux';
import Header from "./Header";

let mapStateToProps = (state) => {
  return {
    s: state,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    openBurger: () => {
      let action = openBurgerActionCreator();
      dispatch(action);
    },
    closeBurger: () => {
      let action = closeBurgerActionCreator();
      dispatch(action);
    },
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
