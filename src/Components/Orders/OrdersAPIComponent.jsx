import React from "react";
import Orders from './Orders';
import axios from "axios";

class OrdersAPIComponent extends React.Component {
  constructor(props) {
    super(props);
    this.Numbers = React.createRef();
    this.SliderRef = React.createRef();
  }
  componentDidMount(){
    axios
    .get("https://alexsandrzolotarev.github.io/api/encrypted.json")
    .then((response) => this.props.setCards(response.data.models));
  }
  onChangeCounterPlus = () => {
    this.props.changeCounterPlus(this);
    this.sliderRef.current.swiper.slideNext();
  }
  onSlideChange = () => {
    this.props.changeCounterAlbum(this.sliderRef.current.swiper.activeIndex);
  }
  onChangeCounterMinus = () => {
    this.props.onChangeCounterMinus(this);
    this.sliderRef.current.swiper.slidePrev();
  }
  render() {
    return <Orders SliderRef= {this.SliderRef}
    onSlideChange= {this.onSlideChange}
    album= {this.props.album}
    Numbers= {this.Numbers}
    counterAlbum ={this.props.counterAlbum}
    onChangeCounterMinus ={this.onChangeCounterMinus}
    onChangeCounterPlus = {this.onChangeCounterPlus}
    />
}
}
export default OrdersAPIComponent;
