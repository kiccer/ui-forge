export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss'
    ],

    plugins: [
        '@stylistic/stylelint-plugin'
    ],

    rules: {
        '@stylistic/indentation': 4,
        'selector-class-pattern': [
            '^el-.+|^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', {
                message: 'Selector should be written in lowercase with hyphens (selector-class-pattern)'
            }
        ]
    },

    overrides: [
        {
            files: ['*.html', '**/*.html'],
            customSyntax: 'postcss-html'
        },
        {
            files: ['*.vue', '**/*.vue'],
            extends: [
                'stylelint-config-recommended-vue'
            ]
        }
    ]
}
