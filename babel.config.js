module.exports = {
	presets: [
		['@vue/app'],
		["@babel/preset-env", { "modules": false }]
	],
	plugins: [
		"@babel/plugin-transform-runtime",
	],
	env: {
		test: {
			presets: [
				["@babel/preset-env", { "targets": { "node": "current" }}],
			],
			plugins: [
				"@babel/plugin-transform-spread"
			]
		}
	}
}
