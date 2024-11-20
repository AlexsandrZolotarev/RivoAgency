const SET_CARDS = "SET-CARDS";
let initialState = {
  orders: [],
};

const ordersReducer = (state = initialState, action) => {
  let copyState = { ...state };
  switch (action.type) {
    case SET_CARDS: {
      copyState.orders = [...state.orders];
      copyState.orders = action.cards;
      return copyState;
    }
    default:
      return state;
  }
};

export const setCards = (cards) => ({ type: SET_CARDS, cards: cards });

export default ordersReducer;
