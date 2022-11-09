import { expensiveTags, paymentMethods } from "../../pages/expenses/form/expensives.types"
import { ExpensiveAction, ExpensiveState, IExpensive } from "../redux.types"
import * as actionTypes from "./actionTypes"

const initialValue: ExpensiveState = {
  expensives : [
    {
      id: 1,
      name: "Conta de luz",
      value: 120,
      tag: expensiveTags.ContasDaCasa,
      methodPayment: paymentMethods.Dinheiro,
      description: ""
    }
  ]
}

const reducer = (
  state: ExpensiveState = initialValue,
  action: ExpensiveAction
): ExpensiveState => {
  switch (action.type) {
    case actionTypes.ADD_EXPENSIVE:
      const newExpensive: IExpensive = {
        id: (state.expensives[state.expensives.length].id + 1),
        name: action.value.name,
        value: action.value.value,
        tag: action.value.tag,
        methodPayment: action.value.methodPayment,
        description: action.value.description
      }
      return {
        ...state,
        expensives: state.expensives.concat(newExpensive),
      }
    case actionTypes.REMOVE_EXPENSIVE:
      const updatedArticles: IExpensive[] = state.expensives.filter(
        article => article.id !== action.value.id
      )
      return {
        ...state,
        expensives: updatedArticles,
      }
  }
  return state
}

export default reducer