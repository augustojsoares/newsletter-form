import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import EmailInput from '../components/EmailInput'

let container = null
const handle = jest.fn()
beforeEach(() => {
  container = render(<EmailInput handleInputChange={handle}>Email</EmailInput>)
})

afterEach(cleanup)

it('should render', () => {
  expect(container.getByLabelText('Email')).toBeTruthy()
})

it('should trigger input handler on change', () => {
  expect(handle).not.toHaveBeenCalled()
  const input = container.getByLabelText('Email')

  fireEvent.change(input, { target: { value: 'mail@mail.com' } })

  expect(handle).toHaveBeenCalled()
})

it('should update value on change', () => {
  const input = container.getByLabelText('Email')

  fireEvent.change(input, { target: { value: 'mail@mail.com' } })
  expect(input.value).toBe('mail@mail.com')
})
