
import React from 'react'
import Careers from './Careers';
import { addVacanciActionCreator, onVacancichangeActionCreator,liftTextActionCreator} from '../../Redux/careerVacancies-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    careerVacancies : state.careerPage.vacancies,
    newCareerVacanci: state.careerPage.newCareerVacanci
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    liftText: (input) => {
      let action = liftTextActionCreator(input);
      dispatch(action);
     },
    updateNewVacanciText: (input) => {
      let action = onVacancichangeActionCreator(input);
      dispatch(action);
    },
    addVacanci: () => {
     dispatch(addVacanciActionCreator());
    },
  }
}

const CareersContainer = connect(mapStateToProps,mapDispatchToProps)(Careers);

 export default CareersContainer;


