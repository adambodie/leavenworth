const Vue = require('vue');
const Intro = require('./src/vue/intro.vue');
const App = require('./src/vue/app.vue');
const Card = require('./src/vue/card.vue');

new Vue({
		el: '#intro',
		render: function(createElement) {
			return createElement(Intro);
		}
})

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
