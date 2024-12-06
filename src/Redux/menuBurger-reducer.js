const TOGGLE_BURGER = "TOGGLE-BURGER";


let initialState = {
  bool:false,
};

const MenuBurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BURGER: {
      // if(state.bool) document.body.style.overflow = 'auto';
      // else document.body.style.overflow = 'hidden';
      // state.bool = !state.bool;
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
