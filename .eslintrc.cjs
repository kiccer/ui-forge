/* eslint-env node */

// 是否是 package.json scripts 中的 lint 命令
const isLint = process.env.npm_lifecycle_event === 'lint'

module.exports = {
    root: true,

    extends: [
        'standard'
    ],

    parserOptions: {
        ecmaVersion: 'latest'
    },

    plugins: [
        'html'
    ],

    rules: {
        indent: ['error', 4],
        'no-unused-vars': isLint ? 'error' : 'warn'
    },

    overrides: [
        {
            files: ['*.vue'],

            extends: [
                'plugin:vue/vue3-strongly-recommended'
            ],

            rules: {
                'vue/html-indent': ['error', 4],
                'vue/multi-word-component-names': 'off'
            }
        }
    ]
}
