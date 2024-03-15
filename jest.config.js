module.exports = {
	testEnvironment: "jsdom",
	collectCoverageFrom: ["src/ts/modules/*.ts", "!**/node_modules/**"],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
};
