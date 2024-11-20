import React from "react";
import Careers from "./Careers";
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

const CareersContainer = connect(mapStateToProps, 
  {liftText,
  updateNewVacanciText,
  addVacanci,}
)(Careers);

export default CareersContainer;
