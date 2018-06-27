const Vue = require('vue');
const App = require('./src/vue/app.vue');
const Card = require('./src/vue/card.vue');

new Vue({
		el: '#app',
		render: function(createElement) {
			return createElement(App);
		}
})

new Vue({
		el: '#card',
		render: function(createElement) {
			return createElement(Card);
		}
})
