module.exports = {
  extends: 'airbnb',
  rules: {
    'no-console': [0],
    'func-names': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': 0,
    'dot-notation': 0,
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 6 }],
    'import/no-extraneous-dependencies': 0,
    'arrow-body-style': [1, 'as-needed'],
    'no-unused-vars': [1],
    'jsx-a11y/label-has-for': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0]
  }
};
