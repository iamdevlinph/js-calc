export const ADDER_ADD = 'ADDER_ADD'
export const ADDER_HISTORY = 'ADDER_HISTORY'

export function add (value = 1) {
  return {
    type  : ADDER_ADD,
    payload : value
  }
}

export function addHistory (value = []) {
  return {
    type  : ADDER_HISTORY,
    payload: value
  }
}

export const actions = {
  add,
  addHistory
}

const ACTION_HANDLERS = {
  [ADDER_ADD] : (state, action) => state + action.payload,
  [ADDER_HISTORY] : (state, action) => state + action.payload
}

const initialState = 1
export default function adderReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
