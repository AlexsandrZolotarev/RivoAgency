import React from "react";
import Career from "./Career";
import {
  addVacanci,
  updateNewVacanciText,
  liftText,
} from "../../Redux/careerVacancies-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    careerVacancies: state.careerPage.vacancies,
    newCareerVacanci: state.careerPage.newCareerVacanci,
  };
};

const CareersContainer = connect(mapStateToProps, {
  liftText,
  updateNewVacanciText,
  addVacanci,
})(Career);

export default CareersContainer;
