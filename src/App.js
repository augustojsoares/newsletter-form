import React, { useReducer } from 'react'

import EmailInput from './components/EmailInput'
import CheckboxInput from './components/CheckboxInput'
import RadioInput from './components/RadioInput'
import { reducer, initialState } from './services/formState'
import './styles/App.sass'

const App = () => {
  const handleFormSubmit = evt => {
    evt.preventDefault()
    console.log(formState)
  }

  const [formState, updateFormState] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <header className="App-header" id="form-title">
        Title
      </header>
      <main>
        <form
          className="signup-form"
          onSubmit={handleFormSubmit}
          aria-labelledby="form-title"
        >
          <EmailInput
            name="email"
            placeholder="insert email"
            handleInputChange={updateFormState}
            value={formState.email}
            required
          >
            Email
          </EmailInput>

          <CheckboxInput
            name="consent"
            handleInputChange={updateFormState}
            checked={formState.consent}
            required
          >
            Age > 16?
          </CheckboxInput>

          <CheckboxInput
            name="newsletter"
            handleInputChange={updateFormState}
            checked={formState.newsletter}
          >
            Subscribe newsletter?
          </CheckboxInput>

          <RadioInput
            handleInputChange={updateFormState}
            name="gender"
            options={[
              { label: 'male', identifier: 'male' },
              { label: 'female', identifier: 'female' },
              { label: 'nonBin', identifier: 'nonBin' },
              { label: 'other', identifier: 'other' },
            ]}
            selected={formState.gender}
          >
            Gender identity
          </RadioInput>

          <button type="submit">Subscribe</button>
        </form>
      </main>
    </div>
  )
}

export default App
