import i18n from 'i18n-js'
import transformKeys from 'object-key-path-transformer'

import en from './locales/en.json'
import se from './locales/se.json'

i18n.defaultLocale = 'en'
i18n.locale = 'en'
i18n.fallbacks = true
i18n.translations = { en, se }

const lang = transformKeys(en)

export default i18n
export { lang }
