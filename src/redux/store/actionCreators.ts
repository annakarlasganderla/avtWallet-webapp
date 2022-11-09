import { DispatchType, ExpensiveAction, IExpensive } from "../redux.types";
import * as actionTypes from "./actionTypes";

export function addExpensive(expensive: IExpensive){
  const action: ExpensiveAction = {
    type: actionTypes.ADD_EXPENSIVE,
    value: expensive,
  }

  return simulateHttpRequest(action);
}

export function removeExpensive(article: IExpensive) {
  const action: ExpensiveAction = {
    type: actionTypes.REMOVE_EXPENSIVE,
    value: article,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ExpensiveAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}