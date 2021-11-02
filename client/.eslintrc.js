// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
    // '@nuxtjs', 'plugin:nuxt/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // 'nuxt/no-cjs-in-config': 'off',
    // 'prefer-promise-reject-errors': 'off',
    // 'no-console': 'off',
    // 'vue/require-component-is': 'off',
    // 'space-before-function-paren': 'off',
    // 'semi': ['error', 'always'],
    // 'semi-style': ['error', 'last'],
    // 'vue/valid-v-slot': 'off'
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow to use either single or double qoute
    quotes: ["error", "double", { "avoidEscape": true }]
  }
}
