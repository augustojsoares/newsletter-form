// generic reducer to handle form state updates
export const reducer = (state = {}, action = {}) => {
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

export const initialErrorState = {
  email: '',
  consent: '',
}

export const isEmail = (email = '') =>
  email.match(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  )
