import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import RadioInput from '../components/RadioInput'

let container = null;
const handle = jest.fn()
beforeEach(() => {
  container = render(
    <RadioInput
      handleInputChange={handle}
      options={
        [
          {label: 'o1', identifier: 'o1'},
          {label: 'o2', identifier: 'o2'},
        ]
      }
    >
      Radio
    </RadioInput>
  )
});

afterEach(cleanup);

it('should render', () => {
  expect(container.getByText('Radio')).toBeTruthy()
})

it('should render all options', () => {
  expect(container.getByLabelText('o1')).toBeTruthy()
  expect(container.getByLabelText('o2')).toBeTruthy()
})

it('should trigger input handler on click', () => {
  expect(handle).not.toHaveBeenCalled()
  const input = container.getByLabelText('o1')

  fireEvent.click(input)
  expect(handle).toHaveBeenCalled()
})