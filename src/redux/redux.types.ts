import { PayloadAction } from "@reduxjs/toolkit";
import {
  expensiveTags,
  paymentMethods,
} from "../pages/expenses/form/expensives.types";

export interface IExpensive {
  id: number;
  name: string;
  value: number;
  tag: expensiveTags | null;
  methodPayment: paymentMethods | null;
  description?: string;
}

export type ExpensiveState = {
  expensives: IExpensive[]
}

export type ExpensiveAction = {
  type: string;
  value: IExpensive;
}

export type DispatchTypeExpensives = (args: ExpensiveAction) => ExpensiveAction 

export interface ILogin {
  userName: string;
  password: string;
}

export type LoginState = {
  logged: ILogin
}

export type LoginAction = PayloadAction<ILogin>

export type DispatchTypeLogin = (args: LoginAction) => LoginAction 

export type LoginGetInfosAction = {
  type: string;
}

export type DispatchTypeLoginGetInfos = (args: LoginGetInfosAction) => LoginGetInfosAction 