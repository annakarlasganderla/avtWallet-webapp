import { createSlice } from '@reduxjs/toolkit';
import { LoginAction, LoginState } from '../redux.types';

const initialState: LoginState = {
  logged: {
    email: '',
    password: '',
  },
};

export const sessionsSlice = createSlice({
  name: 'sessionsSlice',
  initialState,
  reducers: {
    login: (state: LoginState, action: LoginAction) => {
      state.logged = action.payload;
    },
    logout: (state: LoginState) => {
      state.logged = initialState.logged;
    }
  }
});

export const { login, logout } = sessionsSlice.actions;
