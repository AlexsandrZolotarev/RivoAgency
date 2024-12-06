import {carsApi} from "../api/api";

const SET_CARDS = "SET-CARDS";
const SET_ORDER = "SET-ORDER";
let initialState = {
  orders: [],
  order: null,
};

const ordersReducer = (state = initialState, action) => {
  let copyState = { ...state };
  switch (action.type) {
    case SET_CARDS: {
      copyState.orders = [...state.orders];
      copyState.orders = action.cards;
      return copyState;
    }
    case SET_ORDER: {
      return { ...state, order: action.order };
    }
    default:
      return state;
  }
};

export const setCards = (cards) => ({ type: SET_CARDS, cards: cards });
export const setOrder = (order) => ({ type: SET_ORDER, order });

export const getCarsThunk = () => {
  return (dispatch) => {
    carsApi.getCars()
    .then((data) => {
      dispatch(setCards(data));
    });
  };
};
export const getCarsOrder = (orderId) => {
  return (dispatch) => {
    carsApi.getCars()
      .then((data) => 
        dispatch(setOrder(data[orderId.carId - 1])))
      .catch((data) => 
        dispatch(setOrder(null)));
  };
};
export default ordersReducer;
