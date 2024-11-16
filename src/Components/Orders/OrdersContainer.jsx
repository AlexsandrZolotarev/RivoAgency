
import React from 'react'
import { onChangeCounterPlus, onChangeCounterMinus, setCardsAC ,onChangeCounterAlbum} from '../../Redux/order-reducer';
import { connect } from 'react-redux';
import Orders from './Orders';
import axios from "axios";
class OrdersContainer extends React.Component {
  constructor(props)
  {
    super(props);
    this.sliderRef = React.createRef();
  }
  componentDidMount(){
    axios
    .get("https://alexsandrzolotarev.github.io/api/encrypted.json")
    .then((response) => this.props.setCards(response.data.models));
  }
  onChangeCounterPlus = () => {
    this.props.changeCounterPlus();
    this.sliderRef.current.swiper.slideNext();
  }
  onSlideChange = () =>{
    this.props.changeCounterAlbum(this.sliderRef.current.swiper.activeIndex);
  }
  onChangeCounterMinus = () => {
    this.props.onChangeCounterMinus();
    this.sliderRef.current.swiper.slidePrev();
  }
  render() {
    return <Orders SliderRef= {this.SliderRef}
    onSlideChange= {this.onSlideChange}
    album= {this.props.album}
    counterAlbum ={this.props.counterAlbum}
    onChangeCounterMinus ={this.onChangeCounterMinus}
    onChangeCounterPlus = {this.onChangeCounterPlus}
    sliderRef ={this.sliderRef}
    />
}
}

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
      debugger;
      let action = onChangeCounterAlbum(counterSlider);
      dispatch(action);
  },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrdersContainer);


