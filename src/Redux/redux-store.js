
import careerVacanciesReducer from "./careerVacancies-reducer";
import homeReducer from './home-reducer'
import { createStore, combineReducers} from "redux";
import ordersReducer from "./order-reducer";

let reducers = combineReducers(
  {
    careerPage: careerVacanciesReducer,
    homePage : homeReducer,
    OrdersPage : ordersReducer,
  }
)

let store = createStore(reducers);


window.store = store;
export default store;