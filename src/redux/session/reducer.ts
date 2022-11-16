import { ILogin, LoginAction, LoginState } from "../redux.types";
import { GET, LOGIN, LOGOUT } from "./types";

const initialLogged: LoginState = {
  logged: {
    userName: "",
    password: "",
  },
};

export const reducerLogin = (
  state: LoginState = initialLogged,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case LOGIN:
      const loggedUser: ILogin = {
        userName: action.value.userName,
        password: action.value.password,
      };
      console.log(action)
      return {
        ...state,
        logged: loggedUser,
      };
    case LOGOUT:
      return {
        ...state,
        logged: initialLogged.logged,
      };
    case GET:
      return state;
  }
  return state;
};
