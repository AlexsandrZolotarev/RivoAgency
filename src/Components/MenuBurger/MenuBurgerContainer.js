import {
  toogleBurger,
} from "../../Redux/menuBurger-reducer";
import { connect } from 'react-redux';
import MenuBurger from "./MenuBurger";

let mapStateToProps = (state) => {
  return {
  };
};
const MenuBurgerContainer = connect(mapStateToProps, 
  {
    toogleBurger,
  }
)(MenuBurger);

export default MenuBurgerContainer;
