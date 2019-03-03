module.exports = {
	presets: [
		['@vue/app'],
		["@babel/preset-env", { "modules": false }]
	],
	plugins: [
		"@babel/plugin-transform-runtime",
		"@babel/plugin-proposal-object-rest-spread",
		"@babel/plugin-transform-spread"
	],
	env: {
		test: {
			presets: [
				["@babel/preset-env", { "targets": { "node": "current" }}],
			],
			plugins: [
				"@babel/plugin-transform-runtime",
				"@babel/plugin-proposal-object-rest-spread",
				"@babel/plugin-transform-spread"
			]
		}
	}
}
