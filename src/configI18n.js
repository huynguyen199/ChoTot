import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import languages from "./locales"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: "v3",
    resources: languages,
    ns: ["common"],
    defaultNS: "common",
    lng: "vi", // if you're using a language detector, do not define the lng option
    fallbackLng: "vi",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  })

export default i18n
