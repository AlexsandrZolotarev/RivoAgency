
import React from 'react'
import Orders from './Orders';
import { onChangeCounterPlus, onChangeCounterMinus, setCardsAC } from '../../Redux/order-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {

  return {
    album : state.OrdersPage.album,
    counterAlbum : state.OrdersPage.counterAlbum,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeCounterPlus: (symbol) => {
        let action = onChangeCounterPlus(symbol);
        dispatch(action);
    },
    setCards: (cards) => {
      let action = setCardsAC(cards);
      dispatch(action);
    },
    onChangeCounterMinus : (symbol) => {
        let action = onChangeCounterMinus(symbol);
        dispatch(action);
    },
  }
}

const OrdersContainer = connect(mapStateToProps,mapDispatchToProps)(Orders);

 export default OrdersContainer;


