import Vue from 'vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import cardStore from '../src/store/index';
import Card from '../src/components/Card.vue';
import { mount } from '@vue/test-utils';
import { cloneDeep } from 'lodash'

test('increments "count" value when "increment" is commited', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(cardStore));
  expect(store.state.value).toBe(10)
})

function sum(a, b) {
    return a + b;
  }
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
