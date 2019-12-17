import {
  ADD,
  MINUS,
  CHANGENAME
} from './action'

import { combineReducers } from 'redux'

const initState = {
  number: 0,
}

function showNumber(state = initState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, number: state.number + 1 }
    case MINUS:
      return { ...state, number: state.number - 1 }
    default:
      return state
  }
}

const initState2 = {
  name: 'name'
}

function showName(state = initState2, action) {
  switch (action.type) {
    case CHANGENAME:
      return { ...state, name: action.name }
    default:
      return state
  }
}

const app = combineReducers({
  showNumber,
  showName
})

export default app