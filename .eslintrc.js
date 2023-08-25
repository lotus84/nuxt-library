module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "plugin:@intlify/vue-i18n/recommended",
  ],
  plugins: [],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "@intlify/vue-i18n/no-raw-text": [
      process.env.NODE_ENV === "production" ? "error" : "warn",
      {
        ignoreText: [":", "?", "(", ")", ",", "/", "—", "+"],
      },
    ],
    "@intlify/vue-i18n/no-missing-keys": "off", // not working with per component i18n option
    "@intlify/vue-i18n/no-v-html": "off",
  },
};
