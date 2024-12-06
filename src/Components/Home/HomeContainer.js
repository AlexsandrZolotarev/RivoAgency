import Home from "./Home";
import { onChangeButtonPlay, updateVolume } from "../../Redux/home-reducer";
import { connect } from "react-redux";
import { Component } from "react";
import { AnimationHomePage } from "../..";
class HomeContainer extends Component {
  componentDidMount()
  { 
    AnimationHomePage();
  }
  render() {
    return (
      <Home {...this.props}/>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    volume: state.volume,
  };
};

export default connect(mapStateToProps, {
  onChangeButtonPlay,
  updateVolume,
})(HomeContainer);