// generic reducer to handle form state updates
export const reducer = (state={}, action={}) => {
  // destructure field name and value from the action payload
  // using a specific payload for each input type we can reuse the reducer for all of them
  const { name, value } = action

  // merge the old and new state
  return { ...state, [name]: value }
}

// initial form state
export const initialState = {
  email: '',
  consent: false,
  newsletter: false,
  gender: false,
}
