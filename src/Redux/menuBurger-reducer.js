const TOGGLE_BURGER = "TOGGLE-BURGER";


let initialState = {
  bool:true,
};

const MenuBurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BURGER: {
      if(state.bool) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = 'auto';
      state.bool = !state.bool;
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
