export const ADD = 'ADD'
export const MINUS = 'MINUS'
export const CHANGENAME = 'CHANGENAME'

export function add() {
  return { type: ADD }
}

export function minus() {
  return { type: MINUS }
}

export function changeName(name) {
  return { type: CHANGENAME, name }
}
