module.exports = {
  extends: 'airbnb',
  rules: {
    'arrow-body-style': [
      'warn',
      'as-needed'
    ],
    'arrow-parens': [
      'warn',
      'always'
    ],
    'class-methods-use-this': [
      'warn'
    ],
    'comma-dangle': 'off',
    'dot-notation': 'off',
    'func-names': [
      'error',
      'never'
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'warn',
    'jsx-a11y/label-has-for': [
      'off'
    ],
    'key-spacing': 'warn',
    'max-len': [
      'warn',
      150
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 6
      }
    ],
    'no-alert': [
      'warn'
    ],
    'no-console': [
      'off'
    ],
    'no-trailing-spaces': 'warn',
    'no-unused-vars': [
      'warn'
    ],
    'prefer-arrow-callback': [
      'warn'
    ],
    quotes: [
      'warn'
    ],
    'react/jsx-closing-bracket-location': [
      'warn',
      'after-props'
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.js',
          '.jsx'
        ]
      }
    ],
    'react/jsx-indent': [
      'warn'
    ],
    'react/no-array-index-key': [
      'off'
    ],
    'react/prop-types': [
      'off'
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'spaced-comment': 'warn'
  }
};
