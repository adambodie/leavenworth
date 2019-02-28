module.exports = {
	presets: [
		['@vue/app'],
		["@babel/preset-env", { "modules": false }]
	],
	plugins: [
		"@babel/plugin-transform-runtime",
		"@babel/plugin-proposal-object-rest-spread"
	],
	env: {
		test: {
			presets: [
				["@babel/preset-env", { "targets": { "node": "current" }}],
			],
			plugins: [
				"@babel/plugin-proposal-object-rest-spread"
			]
		}
	}
}
