import { createSlice } from "@reduxjs/toolkit";
import { LoginAction, LoginState } from "../redux.types";

const initialState: LoginState = {
  logged: {
    userName: "",
    password: "",
  },
};

export const sessionsSlice = createSlice({
  name: "sessionsSlice",
  initialState,
  reducers: {
    login: (state: LoginState, action: LoginAction) => {
      state.logged = action.payload;
    },
    logout: (state: LoginState) => {
      state.logged = initialState.logged;
    },
    get: (state: LoginState) => {
      return state;
    }
  }
});

export const { login, logout, get } = sessionsSlice.actions;
