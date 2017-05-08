module.exports = {
  extends: 'airbnb',
  rules: {
    'no-console': ['off'],
    quotes: ['warn'],
    'no-alert': ['warn'],
    'func-names': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': 'off',
    'dot-notation': 'off',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 6 }],
    'import/no-extraneous-dependencies': 'off',
    'arrow-body-style': ['warn', 'as-needed'],
    'prefer-arrow-callback': ['warn'],
    'no-unused-vars': ['warn'],
    'jsx-a11y/label-has-for': ['off'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': ['off']
  }
};
