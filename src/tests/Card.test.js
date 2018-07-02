import Vue from 'vue'
import Card from '../vue/card.vue'
import { shallow } from 'vue-test-utils'

describe('Card.test.js', () => {
	let cmp, vm
	
	beforeEach(() => {
		cmp = shallow(Card, {})
		cmp.setData({cards: [
			{english: 'Beer', german: 'Bier', type: 'Cuisine', flipped: false, visible: true},
			{english: 'Mountain', german: 'Berg', type: 'Geography', flipped: false, visible: true},
			{english: 'Goat', german: 'Ziege', type: 'Animal', flipped: false, visible: true}
		], 
		checked: false, type: '', visible: true})
	})
	
	it('has the expected html structure', () => {
		expect(cmp.element).toMatchSnapshot()
	})
	it('should have a length of 3', () => {
		cmp.vm.types = [];
		expect(cmp.vm.uniqueCardsList).toContain('Animal')
		expect(cmp.vm.uniqueCardsList.length).toBe(3)
	})
})
