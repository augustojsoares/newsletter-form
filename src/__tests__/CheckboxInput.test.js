import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import CheckboxInput from '../components/CheckboxInput'

let container = null;
let checked= false
const handle = jest.fn()
beforeEach(() => {
  container = render(
    <CheckboxInput
      handleInputChange={handle}
      checked={checked}
    >
      Checkbox
    </CheckboxInput>
  )
});

afterEach(cleanup);

it('should render', () => {
  expect(container.getByLabelText('Checkbox')).toBeTruthy()
})

it('should trigger input handler on click', () => {
  expect(handle).not.toHaveBeenCalled()
  const input = container.getByLabelText('Checkbox')
  
  fireEvent.click(input)

  expect(handle).toHaveBeenCalled()
})

it('should have checked attribute matching prop', () => {
  const input = container.getByLabelText('Checkbox')
  
  expect(input.checked).toBeFalsy()
})