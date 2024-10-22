import careerVacanciesReducer from "./careerVacancies-reducer";


let store = {
  _state : {
    products:[
        { id:1,  category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { id:2,  category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { id:3,  category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { id:4,  category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { id:5, category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { id:6, category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
        ],
    careerVacancies : {
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
      },
  },
  _callSubcriber()
  { 
    console.log('rerenderEntireTree');
  },
  getState()
  {
    return this._state;
  },
  subcribe(observer){
    this._callSubcriber = observer;
  },
  dispatch(action)
  {
    this._state.careerVacancies = careerVacanciesReducer(this._state.careerVacancies,action);
  }
}


window.store = store;
export default store; 
