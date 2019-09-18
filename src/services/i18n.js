// A simple implementation of an i18n library
// tranlations and configs can be set here os passed as params at runtime

const FALLBACK_LANGUAGE = 'en-US'

// This is a simplified implementation and therefore does not support nested translation levels
const TRANSLATIONS = {
  'en-US': {
    title: 'Subscribe to the mailing list',
    emailPlaceholder: 'Enter your email address',
    emailLabel: 'Email',
    emailErrorEmpty: 'You must provide an email address',
    emailErrorInvalid: 'Invalid email address',
    consentLabel: 'Yes, I am over __ years old',
    consentErrorEmpty: 'You\'re not the minimum age required to subscribe',
    accordionMessage:
      'By law, you must be at least __ years old to subscribe to this newsletter',
    openAccordionLabel: 'more info',
    newsletterMessage: 'Yes, I wish to receive the newsletter',
    genderTitle: 'Gender identity',
    genderLabelMale: 'Male',
    genderLabelFemale: 'Female',
    genderLabelNonBin: 'Genderqueer / Non-Binary',
    genderLabelOther: 'Other',
    subscribeButton: 'Subscribe',
  },
  'de-DE': {
    title: 'Abonnieren Sie die Mailingliste',
    emailPlaceholder: 'Geben sie ihre E-Mailadresse ein',
    emailLabel: 'Email',
    emailErrorEmpty: 'Sie müssen eine E-Mail-Adresse angeben',
    emailErrorInvalid: 'Ungültige E-Mail-Adresse',
    consentLabel: 'Ja, ich bin über __ Jahre alt',
    consentErrorEmpty: 'Sie sind nicht das Mindestalter, um sich anzumelden',
    accordionMessage:
      'Laut Gesetz müssen Sie mindestens __ Jahre alt sein, um diesen Newsletter zu abonnieren',
    openAccordionLabel: 'Mehr Info',
    newsletterMessage: 'Ja, ich möchte den Newsletter erhalten',
    genderTitle: 'Geschlechtsidentität',
    genderLabelMale: 'Männlich',
    genderLabelFemale: 'Weiblich',
    genderLabelNonBin: 'Genderqueer / Nicht-Binär',
    genderLabelOther: 'Andere',
    subscribeButton: 'Abonnieren',
  },
}

const CONFIGS = {
  'en-US': {
    ageOfConsent: 18,
    showNewsletter: true,
    showGender: true,
  },
  'de-DE': {
    ageOfConsent: 16,
    showNewsletter: true,
    showGender: true,
  },
}

//extracts the lang code from the query string, if available. Otherwise returns the fallback
export const getLang = (fallback = FALLBACK_LANGUAGE) => {
  const queryString = window.location.search

  if (queryString === '') {
    return fallback
  }

  const parsedValues = queryString.match(/lng=(\w\w-\w\w)/) || []

  return parsedValues[1] || fallback
}

// creates and returns an object containing translation functions
export const I18n = (
  lang,
  translations = TRANSLATIONS,
  configs = CONFIGS,
  fallback = FALLBACK_LANGUAGE
) => {
  const setup = (translations, emptyValue = '') => {
    const primaryTranslations = translations[lang] || translations[fallback]
    const fallbackTranslations = translations[fallback]

    // the actual tranaltion function. Tries to match the accessor string to the active language, followed by the fallback language. 
    // If no match, returns the empty value
    return (accessor, ...rest) => {
      let value =
        primaryTranslations[accessor] !== undefined
          ? primaryTranslations[accessor]
          : fallbackTranslations[accessor] !== undefined
          ? fallbackTranslations[accessor]
          : emptyValue

      // This piece of code allows the use of translation strings with embedded variables
      // passed as many variables as desired and they will sequentially replace every occurence of '__' on the translation
      if (rest.length > 0 && typeof value === 'string') {
        rest.map(variable => (value = value.replace('__', variable)))
      }

      return value
    }
  }

  // Functionality could have been combined in single function
  // This way provides clear separation between actual translations and localized configs
  return {
    t: setup(translations),
    config: setup(configs, false),
  }
}
