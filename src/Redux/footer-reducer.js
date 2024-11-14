const SCROLL = "SCROLL";

let initialState = {
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCROLL: {
      console.log(1);
      return {...state}
    }
    default:
      return state;
  }
};

export const scrollToHeaderActionCreator = () => ({
  type: SCROLL,
});

export default headerReducer;
