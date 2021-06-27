module.exports = {
  root: true,
  extends: ['airbnb-typescript'],
  env: {
    jest: true,
  },
  plugins: ['prettier'],
  parserOptions: { project: ['./tsconfig.json'] },
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-indent': [2, 2],
    indent: ['error', 2, { ignoredNodes: ['JSXElement'] }],
    'react/prefer-stateless-function': 'off',
    'no-use-before-define': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    'linebreak-style': ['error', 'unix'],
    'operator-linebreak': 'off',
  },
};
