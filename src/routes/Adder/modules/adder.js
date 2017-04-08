export const ADDER_ADD = 'ADDER_ADD'
export const ADDER_HISTORY = 'ADDER_HISTORY'

export function add (value = 1) {
  return (dispatch, getState) => {
    dispatch({
      type  : ADDER_ADD,
      payload : {
        value: getState().adder.value + value,
        history: getState().adder.history.concat(value)
      }
    })
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
  [ADDER_ADD] : (state, action) => action.payload,
  [ADDER_HISTORY] : (state, action) => state + action.payload
}

const initialState = {
  value: 0,
  history: []
}

export default function adderReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
