module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: { 'max-classes-per-file': ['error', 2] },
};
