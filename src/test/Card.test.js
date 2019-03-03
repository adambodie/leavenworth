import { createLocalVue } from '@vue/test-utils';
import 'jest-dom/extend-expect';
import Vuex from 'vuex';
import cardStore from '../store';
import Card from '../components/Card.vue';
import { shallowMount } from '@vue/test-utils';

test('store wrapper exists', () => {
	const localVue = createLocalVue()
	localVue.use(Vuex)
	const store = cardStore;
	const wrapper = shallowMount(Card, { store, localVue });
	expect(wrapper.exists()).toBe(true);
})

