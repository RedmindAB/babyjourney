import i18n from 'i18n-js'
import transformKeys from 'object-key-path-transformer'
import { NativeModules, Platform } from 'react-native'

import en from './locales/en.json'
import sv from './locales/sv.json'

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier

const prettyLanguage = deviceLanguage.substring(0, deviceLanguage.indexOf('_'))

i18n.defaultLocale = 'en'
i18n.locale = prettyLanguage
i18n.fallbacks = true
i18n.translations = { en, sv }

console.log(i18n.locale)

const lang = transformKeys(en)

export default i18n
export { lang }
