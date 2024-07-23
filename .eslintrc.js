module.exports = {
  extends: ['@mate-academy/eslint-config', 'plugin:cypress/recommended'],
  rules: {
    'linebreak-style': ['error', 'unix'], // використовуйте 'unix' для LF або 'windows' для CRLF
  },
};
