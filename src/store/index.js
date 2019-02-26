import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = {
		cards: [
			{english: 'Beer', german: 'Bier', type: 'Cuisine', visible: true, id: 1},
			{english: 'Mountain', german: 'Berg', type: 'Geography', visible: true, id: 2},
			{english: 'Goat', german: 'Ziege', type: 'Animal', visible: true, id: 3},
			{english: 'Street', german: 'Straße', type: 'Transportation', visible: true, id: 4},
			{english: 'River', german: 'Fluss', type: 'Geography', visible: true, id: 5},
			{english: 'Sausage', german: 'Wurst', type: 'Cuisine', visible: true, id: 6},
			{english: 'Knight', german: 'Ritter', type: 'Person', visible: true, id: 7},
			{english: 'Welcome', german: 'Willkommen', type: 'Greeting', visible: true, id: 8},
			{english: 'Island', german: 'Insel', type: 'Geography', visible: true, id: 9},
			{english: 'Tree', german: 'Baum', type: 'Plants', visible: true, id: 10},
			{english: 'Bear', german: 'Bär', type: 'Animal', visible: true, id: 11},
			{english: 'Bridge', german: 'Brücke', type: 'Transportation', visible: true, id: 12},
			{english: 'Sun', german: 'Sonne', type: 'Weather', visible: true, id: 13},
			{english: 'Library', german: 'Bibliothek', type: 'Place', visible: true, id: 14},
			{english: 'Goodbye', german: 'Auf Wiedersehen', type: 'Greeting', visible: true, id: 15},
			{english: 'Flowers', german: 'Blumen', type: 'Plants', visible: true, id: 16},
			{english: 'Nutcracker', german: 'Nussknacker', type: 'Tool', visible: true, id: 17},
			{english: 'Clouds', german: 'Wolken', type: 'Weather', visible: true, id: 18},
			{english: 'Highway', german: 'Autobahn', type: 'Transportation', visible: true, id: 19},
			{english: 'Cheers', german: 'Prost', type: 'Greeting', visible: true, id: 20},
			{english: 'Blackbird', german: 'Amsel', type: 'Animal', visible: true, id: 21},
			{english: 'Rain', german: 'Regen', type: 'Weather', visible: true, id: 22},
			{english: 'City Hall', german: 'Rauthaus', type: 'Place', visible: true, id: 23},
			{english: 'Waterfall', german: 'Wasserfall', type: 'Geography', visible: true, id: 24},
			{english: 'Pipe', german: 'Rohr', type: 'Tool', visible: true, id: 25},
			{english: 'Waitress', german: 'Kellnerin', type: 'Person', visible: true, id: 26},
			{english: 'Icicle', german: 'Eiszapfen', type: 'Tool', visible: true, id: 27},
			{english: 'Chocolate', german: 'Shockolade', type: 'Cuisine', visible: true, id: 28},
			{english: 'Dancer', german: 'Tänzer', type: 'Person', visible: true, id: 29},
			{english: 'Squirrel', german: 'Eichhörnchen', type: 'Animal', visible: true, id: 30},
			{english: 'Bicycle', german: 'Fahrrad', type: 'Transportation', visible: true, id: 31},
			{english: 'Thanks', german: 'Vielen Dank', type: 'Greeting', visible: true, id: 32},
			{english: 'Snow', german: 'Schnee', type: 'Weather', visible: true, id: 33},
			{english: 'Shop', german: 'Geschäft', type: 'Place', visible: true, id: 34},
			{english: 'French Fries', german: 'Pommes Frites', type: 'Cuisine', visible: true, id: 35},
			{english: 'Hospital', german: 'Krankenhaus', type: 'Place', visible: true, id: 36},
			{english: 'Vegetable', german: 'Gemüse', type: 'Plant', visible: true, id: 37},
			{english: 'Chef', german: 'Koch', type: 'Person', visible: true, id: 38},
			{english: 'Shrub', german: 'Strauch', type: 'Plant', visible: true, id: 39},
			{english: 'Spoon', german: 'Löffel', type: 'Tool', visible: true, id: 40},
		],
		value: 9,
		type: '',
		visible: true
};

export const mutations = {
		removeCard: (state, payload) => state.cards[payload].visible = !state.cards[payload].visible,
		filterListByType: (state) => {
			state.value = '';
			state.type = event.target.value;
		},
		filterListByAmount: (state) => {
			state.type = '';
			state.value = event.target.value;
			state.cards.forEach((card, index) => {
				if (state.value === 'Filter by Amount...'){
					card.visible = true;
				} 
				card.visible = (index > state.value) ? false : true
			});
		}
};

export default new Vuex.Store({
  state,
  mutations
});
