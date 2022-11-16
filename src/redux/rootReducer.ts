import { combineReducers } from "redux";
import { reducerExpensives } from "./expensives/reducer";
import { reducerLogin } from "./session/reducer";

const rootReducer = combineReducers({
  login: reducerLogin, 
  expensives: reducerExpensives
})

export default rootReducer;