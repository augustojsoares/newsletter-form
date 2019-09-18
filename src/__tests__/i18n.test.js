import { I18n, getLang } from '../services/i18n'

it('returns an object with two functions', () => {
  const i18n = I18n(getLang())
  expect(typeof i18n.t).toBe('function')
  expect(typeof i18n.config).toBe('function')
})

it('correctly translates', () => {
  const i18n = I18n(getLang())
  expect(i18n.t('title')).toBe('Subscribe to the mailing list')
})

it('correctly translates to non default language', () => {
  const i18n = I18n('de-DE')
  expect(i18n.t('title')).toBe('Abonnieren Sie die Mailingliste')
})

it('correctly returns configs', () => {
  const i18n = I18n(getLang())
  expect(i18n.config('ageOfConsent')).toBe(18)
})

it('properly replaces translation variables', () => {
  const i18n = I18n(getLang())
  expect(i18n.t('consentLabel', i18n.config('ageOfConsent'))).toBe('Yes, I am over 18 years old')
})

it('correctly handles multiple variables', () => {
  const i18n = I18n(getLang(), {
    'en-US': {
      variablesTest: 'this is a __ with __ __ in it'
    }
  })
  expect(i18n.t('variablesTest', 'test', 'multiple', 'variables'))
    .toBe('this is a test with multiple variables in it')
})

it('returns existing fallback translation when main not available', () => {
  const i18n = I18n('de-DE', {
    'en-US': {
      test: 'this is a test'
    },
    'de-DE': {}
  })
  expect(i18n.t('test')).toBe('this is a test')
})

it('returns emptyValue when no translation available', () => {
  const i18n = I18n('de-DE', {
    'en-US': {},
    'de-DE': {}
  })
  expect(i18n.t('test')).toBe('')
})

it('defaults to fallback when non supported language is passed', () => {
  const i18n = I18n('fr-FR')
  expect(i18n.t('title')).toBe('Subscribe to the mailing list')
})

it('prioritizes translations in parameters', () => {
  const i18n = I18n(getLang(), {
    'en-US': {
      title: 'this is a test'
    }
  })
  expect(i18n.t('title')).toBe('this is a test')
})