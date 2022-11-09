import {
  expensiveTags,
  paymentMethods,
} from "../pages/expenses/form/expensives.types";

export interface IExpensive {
  id: number;
  name: string;
  value: number;
  tag: expensiveTags;
  methodPayment: paymentMethods;
  description: string;
}

export type ExpensiveState = {
  expensives: IExpensive[]
}

export type ExpensiveAction {
  type: string;
  value: IExpensive;
}

export type DispatchType = (args: ExpensiveAction) => ExpensiveAction 