export const CALCULATOR_ADD = 'CALCULATOR_ADD'

export function add (value = 1) {
  console.log('addd')
  return {
    type  : CALCULATOR_ADD,
    payload : value
  }
}

export const actions = {
  add
}

const ACTION_HANDLERS = {
  [CALCULATOR_ADD] : (state, action) => state + action.payload
}

const initialState = 0

export default function adderReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
