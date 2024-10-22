const ADD_VACANCI = 'ADD-VACANCI';
const UPDATE_VACANCI = 'UPDATE-VACANCI';
const LIFT_TEXT = 'LIFT-TEXT';
let initialState = { 
    vacancies: [{id: 1, name: 'React Developer',salary: '1500', region: "Russia", positionJob:"Senior",url: ''},
    {id: 2, name: 'Php Developer',salary: '1100', region: "Russia", positionJob:"Middle",url: ''},
    {id: 3, name: 'WordPress Developer',salary: '1100', region: "Russia", positionJob:"Senior",url: ''},
    {id: 4, name: 'Laravel Developer',salary: '550', region: "Russia", positionJob:"Junior",url: ''},
    ],
    newCareerVacanci : {
      'name': '',
      'salary': '', 
      'region': '', 
      'positionJob': '',
      'url' : '',
    },
    
}
const careerVacanciesReducer = (state = initialState, action) => {
 
    let stateCopy = {...state};
  switch(action.type)
    {
      case ADD_VACANCI:{
        stateCopy.vacancies= [...state.vacancies];
        let counter = 0;
        Object.entries(state.newCareerVacanci).forEach((item) => {
          if(!!item[1]) counter++;
        });
        if(counter === 4 && !! state.vacancies.length)
        {
          stateCopy.vacancies.push({
            id : state.vacancies.at(-1)?.id + 1 ?? 0, // Проверка на undefined если нет то 0, если есть то + 1 к последнему
            name: `${state.newCareerVacanci.name}`,
            salary: `${state.newCareerVacanci.salary}`, 
            region: `${state.newCareerVacanci.region}`, 
            positionJob:`${state.newCareerVacanci.positionJob}`,
          })
          for(let key in state.newCareerVacanci) stateCopy.newCareerVacanci[key] = '';
        }
        return stateCopy;
      }
      case UPDATE_VACANCI :{
        stateCopy.newCareerVacanci = {...state.newCareerVacanci};
        stateCopy.newCareerVacanci[action.newInput.target.name] = action.newInput.target.value;
        return stateCopy;
      }
      case LIFT_TEXT:
      {
       (!action.newInput.target.value) ? action.newInput.target.previousElementSibling.style.marginBottom  ='-9%' :
        action.newInput.target.previousElementSibling.style.marginBottom ='1%';
        return state;
      }
      default :
         return state;
    }
}
export const addVacanciActionCreator = () => ({type:ADD_VACANCI});
export const onVacancichangeActionCreator = (input) =>({type:UPDATE_VACANCI, newInput: input});  
export const liftTextActionCreator = (input) =>({type:LIFT_TEXT, newInput: input}); 

export default careerVacanciesReducer;