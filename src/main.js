import Vue from 'vue'
import App from './App.vue';
import Vuex from 'vuex'
import cardStore from './store'

import './less/Card.less';

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store(cardStore)

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
