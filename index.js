module.exports = {
  extends: 'airbnb',
  env: {
    es6: true
  },
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
    'jsx-a11y/anchor-is-valid': [
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
    'react/no-did-mount-set-state': [
      'off'
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
    'react/no-underscore-dangle': [
      'off'
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'spaced-comment': 'warn',
    'padded-blocks': [
      'error',
      {
        classes: 'always'
      }
    ],
    'object-curly-newline': ['error',
      {
        ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 6, multiline: true, consistent: true }
      }
    ],
  }
};
