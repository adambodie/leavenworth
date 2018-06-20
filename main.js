const Vue = require('vue');
const App = require('./src/vue/app.vue');

new Vue({
		el: '#app',
		render: function(createElement) {
			return createElement(App);
		}
})
