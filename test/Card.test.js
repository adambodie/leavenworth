import Vue from 'vue'
import Card from '../src/components/Card.vue'
import { shallowMount } from '@vue/test-utils'

describe('Card.test.js', () => {
	let cmp, vm
	
	beforeEach(() => {
		cmp = shallowMount(Card, {})
		cmp.setData({cards: [
			{english: 'Beer', german: 'Bier', type: 'Cuisine', flipped: false, visible: true},
			{english: 'Mountain', german: 'Berg', type: 'Geography', flipped: false, visible: true},
			{english: 'Goat', german: 'Ziege', type: 'Animal', flipped: false, visible: true}
		], 
		checked: false, type: '', visible: true})
	});
	
	it('has the expected html structure', () => {
		expect(cmp.element).toMatchSnapshot();
	});
	it('should have a length of 3', () => {
		expect(cmp.vm.uniqueCardsList.length).toBe(3)
	});
	it('should contain Animal', () => {
		expect(cmp.vm.uniqueCardsList).toContain('Animal')
	});	
})

function sum(a, b) {
    return a + b;
  }
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });