import { createSlice } from "@reduxjs/toolkit";
import { ExpensiveState,  } from "../redux.types";

const initialState: ExpensiveState = {
  expensives: [],
};

export const expensivesSlice = createSlice({
  name: 'expensivesSlice',
  initialState,
  reducers: {
    addExpensive: (state, action) => {
      state.expensives.push(action.payload);
    },
    updateExpensive: (state, action) => {
      const { id, newValue } = action.payload;
      state.expensives = [...state.expensives.slice(0,id-1), newValue, ...state.expensives.slice(id + 1)];
    },
    removeExpensive: (state, action) => {
      state.expensives = state.expensives.filter((expense) => expense.id !== action.payload);
    },
    resetExpensives: (state) => {
      return initialState;
    }
  },
});

export const { addExpensive, updateExpensive, removeExpensive, resetExpensives } = expensivesSlice.actions;
