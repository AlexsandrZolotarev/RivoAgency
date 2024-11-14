const ClOSE_BURGER = "ClOSE-BURGER";
const OPEN_BURGER = "OPEN-BURGER";

let initialState = {
  burger: document.getElementById('hamburger'),
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ClOSE_BURGER: {
      document.getElementById('hamburger').style.display ='flex';
      document.getElementById('hamburger').style.visibility = 'hidden';
      return {...state,burger:document.getElementById('hamburger')};
    }
    case OPEN_BURGER: {
      document.getElementById('hamburger').style.visibility = 'visible';
      return {...state};
    }
    default:
      return state;
  }
};

export const openBurgerActionCreator = () => ({
  type: OPEN_BURGER,
});
export const closeBurgerActionCreator = () => ({
  type: ClOSE_BURGER,
});

export default headerReducer;
