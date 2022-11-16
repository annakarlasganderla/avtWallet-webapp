import { DispatchTypeLogin, DispatchTypeLoginGetInfos, ILogin, LoginAction, LoginGetInfosAction } from "../redux.types";
import { GET, LOGIN, LOGOUT } from "./types";

export function login(credentials: ILogin){
  const action: LoginAction = {
    type: LOGIN,
    value: credentials,
  }
}

export function logout(article: ILogin) {
  const action: LoginAction = {
    type: LOGOUT,
    value: article,
  }
}

export function getInfos() {
  const action: LoginGetInfosAction = {
    type: GET
  }
}

function simulateHttpRequestLogin(action: LoginAction) {
  return (dispatch: DispatchTypeLogin) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}

function simulateHttpRequestLoginGetInfos(action: LoginGetInfosAction){
  return (dispatch: DispatchTypeLoginGetInfos) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}