
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules:{
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-unused-vars':'error',
    '@typescript-eslint/no-extra-parens':'error',
    '@typescript-eslint/no-extra-semi':'error', 
    '@typescript-eslint/object-curly-spacing':[
      'error',
      'always'
    ],
    '@typescript-eslint/quotes': ['error', 'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ]
  },
  root: true,
};