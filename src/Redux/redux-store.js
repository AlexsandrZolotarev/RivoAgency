import careerVacanciesReducer from "./careerVacancies-reducer";
import homeReducer from "./home-reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ordersReducer from "./order-reducer";
import headerReducer from "./menuBurger-reducer";
import authReducer from "./auth-reducer";
import profileReducer from "./profile-reducer";
import {thunk} from "redux-thunk";

let reducers = combineReducers({
  careerPage: careerVacanciesReducer,
  homePage: homeReducer,
  OrdersPage: ordersReducer,
  headerPage: headerReducer,
  auth:authReducer,
  ProfilePage: profileReducer,
});

let store = createStore(reducers,applyMiddleware(thunk));
window.store = store;
export default store;
