module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', '@typescript-eslint', 'import'],
  rules: {
    // Project conventions: tightened for consistent code quality
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/script-setup-uses-vars': 'error',
    // TypeScript
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    // Best practices
    'prefer-const': ['error', { destructuring: 'all' }],
    eqeqeq: ['error', 'always'],
    'consistent-return': 'error',
    'no-var': 'error',
    // Stylistic / imports
    'import/order': ['warn', { 'newlines-between': 'always' }],
    // Vue specific
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/no-multiple-template-root': 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': 'off',
      },
    },
    {
      files: ['*.ts', '*.vue'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
