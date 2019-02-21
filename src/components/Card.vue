<template>
	<div class="jumbotron">
		<h1>English-German Flash Cards</h1>
		<div class="options">
			<select v-on:change="filterList">
				<option value="">Select type of cards...</option>
				<option v-for="(item, index) in uniqueCardsList" :key="index">{{item}}</option>
			</select>
			<div class="showAll">
				<input type="checkbox" v-model="checked" v-on:change="showAllCards()" /> Show All Cards
			</div>
			<div class="filter">
				<select v-model="value" v-on:change="filter()">
					<option value="">Filter by Amount...</option>
					<option v-for="(card, index) in cards" v-bind:value="index" :key="index" >
						{{ index + 1 }}
					</option>
				</select>
			</div>
		</div>
		<transition-group name="flip" tag="ul" class="card-list">
			<li 
				v-bind:class="{ invisible: !card.visible }" 
				v-show="type === '' || type === card.type" 
				v-for="card in shuffleCards" 
				:key="card.id"
			>
				<vue-flip :active-click="true" width="225px" height="300px" transition="0.4s" >
					<p slot="front" class="card" key="english">{{card.english}}
						<span class="language">English</span>
						<span class="delete-card" v-on:click="showCards(card)">X</span>
					</p>
					<p slot="back" class="card" key="german">{{card.german}}
						<span class="language">German</span>
						<span class="delete-card" v-on:click="showCards(card)">X</span>
					</p>
				</vue-flip>
			</li>
		</transition-group>
</div>
</template>

<script>
import VueFlip from 'vue-flip';
export default {

  components: {
    'vue-flip': VueFlip
  },
	data () {
		return {
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
			{english: 'Chocolate', german: 'Shockolade', type: 'Cuisine', visible: true, id: 28}
			],
			type: '',
			visible: true,
			value: '',
			checked: false
		}
	},
	methods: {
		filterList: function(){
			this.value = '';
			this.checked = true;
			this.type = event.target.value;
		},
		filter: function(){
			this.type = '';
			this.value = event.target.value;
			this.checked = false;
			this.cards.forEach((card, index) => {
				if (this.value === 'Filter by Amount...'){
					card.visible = true;
				} 
				card.visible = (index > this.value) ? false : true
			});
		},
		showCards: function(card) {
			card.visible = !card.visible;
		},
		showAllCards: function() {
			this.value = '';
			if (this.checked === true) {
				this.cards.forEach((card) => card.visible = true);
			}
		},
	},
	computed: {
		uniqueCardsList: function() {
			const types = [];
			this.cards.forEach((card) => {
				if(!types.includes(card.type)) {
					types.push(card.type);
				}
			});
			return types;
		},
		shuffleCards: function() {
			const array = this.cards;
			let currentIndex = array.length, temporaryValue, randomIndex;
			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
			return array;
		}
	}
}
</script>
