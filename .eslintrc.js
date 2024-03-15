module.exports = {
	env: {
		browser: true,
		es2022: true,
		jest: true,
	},
	extends: ["standard-with-typescript", "airbnb-base", "plugin:import/typescript", "plugin:prettier/recommended"],
	overrides: [],
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: "module",
		project: "./tsconfig.json",
	},
	plugins: ["prettier"],
	rules: {
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				ts: "never",
			},
		],
		"no-console": "off",
		"func-names": "off",
		"lines-between-class-members": "off",
	},
};
