import React, { useReducer, useState } from 'react'

import EmailInput from './components/EmailInput'
import CheckboxInput from './components/CheckboxInput'
import RadioInput from './components/RadioInput'
import Accordion from './components/Accordion'
import { reducer, initialState } from './services/formState'
import { getLang, I18n } from './services/i18n'
import './styles/App.sass'

const App = () => {
  const [lang] = useState(getLang())
  const i18n = I18n(lang)

  const [formState, updateFormState] = useReducer(reducer, initialState)
  const handleFormSubmit = evt => {
    evt.preventDefault()
    console.log(formState)
  }

  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false)
  const toggleAccordion = () => setIsAccordionExpanded(!isAccordionExpanded)

  const handleInvalidForm = (...rest) => {
    console.log(rest);
  }

  return (
    <div className="App">
      <header className="App-header" id="form-title">
      {i18n.t('title')}
      </header>
      <main>
        <form
          className="signup-form"
          onSubmit={handleFormSubmit}
          aria-labelledby="form-title"
          onInvalid={handleInvalidForm}
        >
          <EmailInput
            name="email"
            placeholder={i18n.t('emailPlaceholder')}
            handleInputChange={updateFormState}
            value={formState.email}
            required
          >
            {i18n.t('emailLabel')}
          </EmailInput>

          <CheckboxInput
            name="consent"
            handleInputChange={updateFormState}
            checked={formState.consent}
            required
          >
            {i18n.t('consentLabel', i18n.config('ageOfConsent'))}
            {!isAccordionExpanded && (
              <span
                className="accordion-button"
                onClick={toggleAccordion}
                aria-label={i18n.t('openAccordionLabel')}
              >
                ?
              </span>
            )}
          </CheckboxInput>

          <Accordion
            msg={i18n.t('accordionMessage', i18n.config('ageOfConsent'))}
            expanded={isAccordionExpanded}
            toggle={toggleAccordion}
          />

          <CheckboxInput
            name="newsletter"
            handleInputChange={updateFormState}
            checked={formState.newsletter}
          >
            {i18n.t('newsletterMessage')}
          </CheckboxInput>

          <RadioInput
            handleInputChange={updateFormState}
            name="gender"
            options={[
              { label: i18n.t('genderLabelMale'), identifier: 'male' },
              { label: i18n.t('genderLabelFemale'), identifier: 'female' },
              { label: i18n.t('genderLabelNonBin'), identifier: 'nonBin' },
              { label: i18n.t('genderLabelOther'), identifier: 'other' },
            ]}
            selected={formState.gender}
          >
            {i18n.t('genderTitle')}
          </RadioInput>

          <button type="submit">{i18n.t('subscribeButton')}</button>
        </form>
      </main>
    </div>
  )
}

export default App
