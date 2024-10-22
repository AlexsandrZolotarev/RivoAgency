
import React from 'react'
import Home from './Home';
import { volumeChangeActionCreator,buttonPlayOnChange } from '../../Redux/home-reducer';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    volume : state.volume,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    buttonPlayChange : (obj) => {
        let action = buttonPlayOnChange(obj);
        dispatch(action);
    },
    updateVolume: (obj) => {
      let action = volumeChangeActionCreator(obj);
      dispatch(action);
    },
  }
}

const HomeContainer = connect(mapStateToProps,mapDispatchToProps)(Home);

 export default HomeContainer;


