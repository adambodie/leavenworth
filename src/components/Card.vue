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
			<button v-on:click="allEnglish()">All English</button>
			<button v-on:click="allGerman()">All German</button>
		</div>
		<transition-group name="flip" tag="ul" class="card-list">
			<li 
				v-bind:class="{ invisible: !card.visible }" 
				v-show="type === '' || type === card.type" 
				v-for="card in shuffleCards" 
				:key="card.id" 
				v-on:click="toggleLanguage(card)"
			>
					<p class="card" v-if="!card.flipped" key="english">{{card.english}}
						<span class="language">English</span>
						<span class="delete-card" v-on:click="showCards(card)">X</span>
					</p>
					<p class="card" v-else key="german">{{card.german}}
						<span class="language">German</span>
						<span class="delete-card" v-on:click="showCards(card)">X</span>
					</p>
			</li>
		</transition-group>
</div>
</template>

<script>

export default {
	data () {
		return {
			cards: [
			{english: 'Beer', german: 'Bier', type: 'Cuisine', flipped: false, visible: true, id: 1},
			{english: 'Mountain', german: 'Berg', type: 'Geography', flipped: false, visible: true, id: 2},
			{english: 'Goat', german: 'Ziege', type: 'Animal', flipped: false, visible: true, id: 3},
			{english: 'Street', german: 'Straße', type: 'Transportation', flipped: false, visible: true, id: 4},
			{english: 'River', german: 'Fluss', type: 'Geography', flipped: false, visible: true, id: 5},
			{english: 'Sausage', german: 'Wurst', type: 'Cuisine', flipped: false, visible: true, id: 6},
			{english: 'Knight', german: 'Ritter', type: 'Person', flipped: false, visible: true, id: 7},
			{english: 'Welcome', german: 'Willkommen', type: 'Greeting', flipped: false, visible: true, id: 8},
			{english: 'Island', german: 'Insel', type: 'Geography', flipped: false, visible: true, id: 9},
			{english: 'Tree', german: 'Baum', type: 'Plants', flipped: false, visible: true, id: 10},
			{english: 'Bear', german: 'Bär', type: 'Animal', flipped: false, visible: true, id: 11},
			{english: 'Bridge', german: 'Brücke', type: 'Transportation', flipped: false, visible: true, id: 12},
			{english: 'Sun', german: 'Sonne', type: 'Weather', flipped: false, visible: true, id: 13},
			{english: 'Library', german: 'Bibliothek', type: 'Place', flipped: false, visible: true, id: 14},
			{english: 'Goodbye', german: 'Auf Wiedersehen', type: 'Greeting', flipped: false, visible: true, id: 15},
			{english: 'Flowers', german: 'Blumen', type: 'Plants', flipped: false, visible: true, id: 16},
			{english: 'Nutcracker', german: 'Nussknacker', type: 'Tool', flipped: false, visible: true, id: 17},
			{english: 'Clouds', german: 'Wolken', type: 'Weather', flipped: false, visible: true, id: 18},
			{english: 'Highway', german: 'Autobahn', type: 'Transportation', flipped: false, visible: true, id: 19},
			{english: 'Cheers', german: 'Prost', type: 'Greeting', flipped: false, visible: true, id: 20},
			{english: 'Blackbird', german: 'Amsel', type: 'Animal', flipped: false, visible: true, id: 21},
			{english: 'Rain', german: 'Regen', type: 'Weather', flipped: false, visible: true, id: 22},
			{english: 'City Hall', german: 'Rauthaus', type: 'Place', flipped: false, visible: true, id: 23},
			{english: 'Waterfall', german: 'Wasserfall', type: 'Geography', flipped: false, visible: true, id: 24},
			{english: 'Pipe', german: 'Rohr', type: 'Tool', flipped: false, visible: true, id: 25},
			{english: 'Waitress', german: 'Kellnerin', type: 'Person', flipped: false, visible: true, id: 26},
			{english: 'Icicle', german: 'Eiszapfen', type: 'Tool', flipped: false, visible: true, id: 27},
			{english: 'Chocolate', german: 'Shockolade', type: 'Cuisine', flipped: false, visible: true, id: 28}
			],
			type: '',
			visible: true,
			checked: false
		}
	},
	methods: {
		toggleLanguage: function(card) {
			card.flipped = !card.flipped;
		},
		filterList: function(){
			this.type = event.target.value;
		},
		showCards: function(card) {
			card.visible = !card.visible;
		},
		showAllCards: function() {
			if (this.checked === true) {
				this.cards.forEach((card) => {
					card.visible = true;
				});
			}
		},
		allEnglish: function() {
			this.cards.forEach((card) => {
				card.flipped = false;
			});
		},
		allGerman: function() {
			this.cards.forEach((card) => {
				card.flipped = true;
			});
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
