import Vue from 'vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import cardStore from '../src/store';
import Card from '../src/components/Card.vue';
import { shallowMount } from '@vue/test-utils';
import { filter } from '../src/store';
import { mutations, state } from '../src/store';
  const localVue = createLocalVue()
  localVue.use(Vuex)
  

test('returns value from store', () => {
	const store = new Vuex.Store(cardStore);
	expect(store.state.value).toBe(9)
})

/*test('returns value from store', () => {
	const store = new Vuex.Store(cardStore);
	const wrapper = shallowMount(Card, { store, localVue })
	expect(wrapper.element).toMatchSnapshot()
})*/

