import React, { useReducer, useState } from 'react'

import EmailInput from './components/EmailInput'
import CheckboxInput from './components/CheckboxInput'
import RadioInput from './components/RadioInput'
import Accordion from './components/Accordion'
import {
  reducer,
  initialState,
  initialErrorState,
  isEmail,
} from './services/formState'
import { getLang, I18n } from './services/i18n'
import API from './services/api'
import './styles/App.sass'

const App = () => {
  const [lang] = useState(getLang())
  const i18n = I18n(lang)
  window.i18n = i18n

  const [formState, updateFormState] = useReducer(reducer, initialState)
  const [formErrorState, updateFormErrorState] = useReducer(
    reducer,
    initialErrorState
  )

  const validateEmail = () => {
    if (!formState.email) {
      updateFormErrorState({ name: 'email', value: i18n.t('emailErrorEmpty') })
      return false
    }
    if (!isEmail(formState.email)) {
      updateFormErrorState({
        name: 'email',
        value: i18n.t('emailErrorInvalid'),
      })
      console.log('aqui')
      return false
    }
    return true
  }

  const validateConsent = () => {
    if (!formState.consent) {
      updateFormErrorState({
        name: 'consent',
        value: i18n.t('consentErrorEmpty'),
      })
      return false
    }
    return true
  }

  const handleFormSubmit = evt => {
    evt.preventDefault()
    const canSubmit = validateEmail() && validateConsent()

    if (canSubmit) {
      API.subscribeToService(formState)
        .then(response => console.log(response))
        .catch(err => console.error(err))
    }
  }

  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false)
  const toggleAccordion = () => setIsAccordionExpanded(!isAccordionExpanded)

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
          noValidate
        >
          <EmailInput
            name="email"
            placeholder={i18n.t('emailPlaceholder')}
            handleInputChange={updateFormState}
            value={formState.email}
            required
            error={formErrorState.email}
          >
            {i18n.t('emailLabel')}
          </EmailInput>

          <CheckboxInput
            name="consent"
            handleInputChange={updateFormState}
            checked={formState.consent}
            required
            error={formErrorState.consent}
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

          {i18n.config('showNewsletter') && (
            <CheckboxInput
              name="newsletter"
              handleInputChange={updateFormState}
              checked={formState.newsletter}
            >
              {i18n.t('newsletterMessage')}
            </CheckboxInput>
          )}

          {i18n.config('showGender') && (
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
          )}

          <button type="submit">{i18n.t('subscribeButton')}</button>
        </form>
      </main>
    </div>
  )
}

export default App
