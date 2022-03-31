import i18n from "../configI18n"

export const emailContraints = {
  required: {
    value: true,
    message: i18n.t("validator:fillEmail"),
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: i18n.t("validator:invalidEmail"),
  },
}

export const passwordContraints = {
  required: {
    value: true,
    message: i18n.t("validator:fillPassword"),
  },
  minLength: {
    value: 6,
    message: i18n.t("validator:passwordLength"),
  },
}
