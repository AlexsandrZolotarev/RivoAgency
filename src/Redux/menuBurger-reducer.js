const TOGGLE_BURGER = "TOGGLE-BURGER";


let initialState = {
};

const MenuBurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BURGER: {
      document.documentElement.classList.toggle("unscroll");
      return {...state};
    }
    default:
      return state;
  }
};

export const toogleBurger = () => ({
  type: TOGGLE_BURGER,
});

export default MenuBurgerReducer;
