module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": 0,
    "linebreak-style": ["error", "unix"],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
}
