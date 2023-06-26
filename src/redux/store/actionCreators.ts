import { DispatchTypeExpensives, DispatchTypeLogin, DispatchTypeLoginGetInfos, ExpensiveAction, ExpensiveState, IExpensive, ILogin, LoginAction, LoginGetInfosAction } from "../redux.types";
import * as actionTypes from "./actionTypes";

/**
 * Expensives area
 */
export function addExpensive(expensive: IExpensive){
  const action: ExpensiveAction = {
    type: actionTypes.ADD_EXPENSIVE,
    value: expensive,
  }
}

export function removeExpensive(expensive: IExpensive) {
  const action: ExpensiveAction = {
    type: actionTypes.REMOVE_EXPENSIVE,
    value: expensive,
  } 
}

//-----------------------------------//

/**
 * Login/User area
 */
export function login(loginData: ILogin){
  const action: LoginAction = {
    type: actionTypes.LOGIN,
    value: loginData,
  }

  return simulateHttpRequestLogin(action);
}

export function logout(article: ILogin) {
  const action: LoginAction = {
    type: actionTypes.LOGOUT,
    value: article,
  }
  return simulateHttpRequestLogin(action)
}

export function getInfos() {
  const action: LoginGetInfosAction = {
    type: actionTypes.GET
  }
  return simulateHttpRequestLoginGetInfos(action)
}

export function simulateHttpRequestLogin(action: LoginAction) {
  return (dispatch: DispatchTypeLogin) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}

export function simulateHttpRequestLoginGetInfos(action: LoginGetInfosAction){
  return (dispatch: DispatchTypeLoginGetInfos) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}
//-----------------------------------//