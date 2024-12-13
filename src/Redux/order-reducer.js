import {carsApi} from "../api/api";

const SET_CARDS = "SET-CARDS";
const SET_ORDER = "SET-ORDER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const GET_AND_SET_CAR_IN_SEARCHING = "GET_CAR_IN_SEARCHING";
const SET_CAR_FOR_SEARCHING = "SET_CAR_FOR_SEARCHING"
let initialState = {
  orders: [],
  order: null,
  pageSize: 2,
  totalUserCount: 0,
  currentPage:4
};

const ordersReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_CARDS: {
      return {
        ...state,
        totalUserCount:action.cards.length,
        orders:action.cards.slice(state.currentPage, state.currentPage + state.pageSize)
      }
    }
    case SET_CAR_FOR_SEARCHING: {
      return {
        ...state,
        orders:action.cards
      }
    }
    case GET_AND_SET_CAR_IN_SEARCHING: {
      let filterCards = state.orders.filter(car => {
          const regex = new RegExp(action.word,'gi');
          return car.model.match(regex);
      })  
      console.log(filterCards);
      return {
        ...state,
        order:filterCards
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.page
      };
    }
    case SET_ORDER: {
      return { ...state, order: action.order };
    }
    default:
      return state;
  }
};

export const getCardsInSearching = (word) => ({ type: GET_AND_SET_CAR_IN_SEARCHING, word: word });
export const setCardsForSearching = (cards) => ({ type: SET_CAR_FOR_SEARCHING,  cards: cards });
export const setCards = (cards) => ({ type: SET_CARDS, cards: cards });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page: page });
export const setOrder = (order) => ({ type: SET_ORDER, order });

export const getCarsThunk = () => {
  return (dispatch) => {
    carsApi.getCars()
    .then((data) => {
      dispatch(setCards(data));
    });
  };
};
export const setCardsForSearchingThunk = () => {
  return (dispatch) => {
    carsApi.getCars()
    .then((data) => {
      dispatch(setCardsForSearching(data));
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
