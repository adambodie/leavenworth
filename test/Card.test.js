import Vue from 'vue';
import { createLocalVue } from '@vue/test-utils';
import { render, fireEvent } from 'vue-testing-library';
import 'jest-dom/extend-expect';
import Vuex from 'vuex';
import cardStore from '../src/store';
import Card from '../src/components/Card.vue';
import { shallowMount } from '@vue/test-utils';
import { mutations, state } from '../src/store';

/* test('store wrapper exists', () => {
	const localVue = createLocalVue()
	localVue.use(Vuex)
	const store = new Vuex.Store(cardStore);
	const wrapper = shallowMount(Card, { store, localVue });
	expect(wrapper.exists()).toBe(true);
})

test('can render with vuex with defaults', () => {
	const store = new Vuex.Store(cardStore);
	const { queryByTestId } = render(Card, { store });
	expect(queryByTestId('Cuisine')).toHaveTextContent('Cuisine')
})*/

const { setValue } = mutations;

test('sets new value when changed', () => {
	const state = { value: 9 };
	setValue(state, 10);
	expect(state.value).toBe(10);
})

