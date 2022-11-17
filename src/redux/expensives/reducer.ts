import { expensiveTags, paymentMethods } from "../../pages/expenses/form/expensives.types";
import { ExpensiveAction, ExpensiveState, IExpensive } from "../redux.types";
import { ADD_EXPENSIVE, REMOVE_EXPENSIVE } from "./types";

const initialExpensives: ExpensiveState = {
  expensives: [
    {
      id: 1,
      name: "Conta de luz",
      value: 120,
      tag: expensiveTags.alimentacao,
      methodPayment: paymentMethods.dinheiro,
      description: "Conta padrão.",
    },
  ],
};

function reducerExpensives(
  state: ExpensiveState = initialExpensives,
  action: ExpensiveAction
){
  switch (action.type) {
    case ADD_EXPENSIVE:
      const newExpensive: IExpensive = {
        id: state.expensives[(state.expensives.length - 1)].id + 1,
        name: action.value.name,
        value: action.value.value,
        tag: action.value.tag,
        methodPayment: action.value.methodPayment,
        description: action.value.description,
      };
      console.log("socuerro")
      return {
        ...state,
        expensives: state.expensives.concat(newExpensive),
      };
    case REMOVE_EXPENSIVE:
      const updatedExpensives: IExpensive[] = state.expensives.filter(
        (article) => article.id !== action.value.id
      );
      return {
        ...state,
        expensives: updatedExpensives,
      };
  }
  return state;
};

export default reducerExpensives;