module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
			},
		],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal'],
				pathGroups: [
					{ pattern: 'react', group: 'external', position: 'before' },
				],
			},
		],
	},
};
