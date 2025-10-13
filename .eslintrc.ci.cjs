// CI-focused ESLint config: stricter (warnings -> errors) to fail CI on issues
module.exports = {
  extends: ['./.eslintrc.cjs'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': ['error'],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'prefer-const': ['error', { destructuring: 'all' }],
    eqeqeq: ['error', 'always'],
    'consistent-return': 'error',
  },
};
