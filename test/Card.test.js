import Vue from 'vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import cardStore from '../src/store/index';
import Card from '../src/components/Card.vue';
import { shallowMount } from '@vue/test-utils';
import { cloneDeep } from 'lodash'



test('returns value from store', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(cardStore));
  expect(store.state.value).toBe(9)
})

test('returns value from store', () => {
	const localVue = createLocalVue()
	localVue.use(Vuex)
	const store = new Vuex.Store(cloneDeep(cardStore));
	const wrapper = shallowMount(Card, { store, localVue })
	expect(wrapper.element).toMatchSnapshot()
})
