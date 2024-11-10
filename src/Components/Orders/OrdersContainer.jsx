
import React from 'react'
import OrdersAPIComponent from './Orders';
import { onChangeCounterPlus, onChangeCounterMinus, setCardsAC ,onChangeCounterAlbum} from '../../Redux/order-reducer';
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
    changeCounterAlbum : (counterSlider) => {
      let action = onChangeCounterAlbum(counterSlider);
      dispatch(action);
  },
  }
}

const OrdersContainer = connect(mapStateToProps,mapDispatchToProps)(OrdersAPIComponent);

 export default OrdersContainer;


