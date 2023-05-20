// .eslintrc.cjs

module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: ['@nuxtjs/eslint-config-typescript'],
    rules: {
        semi: [2, 'always'],
        'comma-dangle': [2, 'always-multiline'],
    },
}