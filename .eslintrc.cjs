/* eslint-env node */
module.exports = {
    root: true,

    extends: [
        'standard'
    ],

    parserOptions: {
        ecmaVersion: 'latest'
    },

    rules: {
        indent: ['error', 4]
    },

    overrides: [
        {
            files: ['*.vue'],

            parserOptions: {
                ecmaVersion: 2020
            },

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
