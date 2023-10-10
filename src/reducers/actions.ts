import { CoffeeData } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CHANGE_COFFEE = 'CHANGE_COFFEE',
}

export function addNewCoffeeAction(newCoffee: CoffeeData) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
    },
  }
}

export function removeCoffeeAction(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      id,
    },
  }
}

export function changeCoffeeAction(id: string, operation: string) {
  return {
    type: ActionTypes.CHANGE_COFFEE,
    payload: {
      id,
      operation,
    },
  }
}
