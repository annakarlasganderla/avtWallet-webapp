import App from "../App";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { sessionsSlice } from "../redux/session/reducer";
import { expensivesSlice } from "../redux/expensives/reducer";
import {
  expensiveTags,
  paymentMethods,
} from "../pages/expenses/form/expensives.types";
import { usersSlice } from "../redux/users/reducer";

export const buildStoreLogged = () => {
  const store = configureStore({
    reducer: {
      session: sessionsSlice.reducer,
      expensives: expensivesSlice.reducer,
      users: usersSlice.reducer,
    },
    preloadedState: {
      session: {
        logged: {
          email: "teste@teste.com",
          password: "123456A@a",
        },
      },
      expensives: {
        expensives: [
          {
            id: 1,
            name: "teste",
            value: 2,
            coin: "BRL",
            methodPayment: paymentMethods.debito,
            tag: expensiveTags.saude,
            description: "Gastos com vacinação",
          },
        ],
      },
      users: {
        users: [
          {
            name: "teste",
            email: "teste@teste.com",
            password: "123456A@a",
          },
        ],
      },
    },
  });
  return store;
};

export const buildStoreNotLogged = () => {
  const store = configureStore({
    reducer: {
      session: sessionsSlice.reducer,
      expensives: expensivesSlice.reducer,
      users: usersSlice.reducer,
    },
    preloadedState: {
      session: {
        logged: {
          email: "",
          password: "",
        },
      },
      expensives: {
        expensives: [
          {
            id: 1,
            name: "teste",
            value: 2,
            coin: "BRL",
            methodPayment: paymentMethods.debito,
            tag: expensiveTags.saude,
          },
        ],
      },
      users: {
        users: [
          {
            name: "teste",
            email: "teste@teste.com",
            password: "123456A@a",
          },
        ],
      },
    },
  });
  return store;
};

export const renderWithProvider = (storeMock?: any) => {
  render(
    <Provider store={storeMock ? storeMock : store}>
      <App />
    </Provider>
  );
};
