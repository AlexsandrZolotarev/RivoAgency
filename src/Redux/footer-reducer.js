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

export const scrollToHeader = () => ({
  type: SCROLL,
});

export default headerReducer;
