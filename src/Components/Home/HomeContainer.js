import Home from "./Home";
import { onChangeButtonPlay, updateVolume } from "../../Redux/home-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    volume: state.volume,
  };
};

const HomeContainer = connect(mapStateToProps, {
  onChangeButtonPlay,
  updateVolume,
})(Home);

export default HomeContainer;
