import { reducer, initialState } from '../services/formState'

it('updates given state', () => {
  const updated = reducer(initialState, {
    name: 'email',
    value: 'email@email.com',
  })
  expect(updated).toEqual({
    ...initialState,
    email: 'email@email.com',
  })
})

it('preserves state on empty action', () => {
  const updated = reducer(initialState)
  expect(updated).toEqual({
    email: '',
    consent: false,
    newsletter: false,
    gender: false,
  })
})

it('updates with empty state', () => {
  const updated = reducer({}, { name: 'email', value: 'email@email.com' })
  expect(updated).toEqual({
    email: 'email@email.com',
  })
})

it('updates properties not on initial state', () => {
  const updated = reducer(initialState, {
    name: 'test',
    value: 'this is a test',
  })
  expect(updated).toEqual({
    ...initialState,
    test: 'this is a test',
  })
})
