import Vue from 'vue'
import App from './App.vue';
import store from './store'

import './less/Card.less';

Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App),
  store
})
