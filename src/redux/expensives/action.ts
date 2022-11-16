import { ExpensiveAction, IExpensive } from "../redux.types"
import { ADD_EXPENSIVE, REMOVE_EXPENSIVE } from "./types"

export function addExpensive(expensive: IExpensive){
  const action: ExpensiveAction = {
    type: ADD_EXPENSIVE,
    value: expensive,
  }
}

export function removeExpensive(expensive: IExpensive) {
  const action: ExpensiveAction = {
    type: REMOVE_EXPENSIVE,
    value: expensive,
  } 
}