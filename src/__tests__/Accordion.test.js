import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Accordion from '../components/Accordion'

afterEach(cleanup)

it('should render', () => {
  const container = render(<Accordion />)

  expect(container.getByLabelText('close')).toBeTruthy()
})

it('should render message by default', () => {
  const container = render(<Accordion msg="message" />)

  expect(container.getByText('message')).toBeTruthy()
})
