const cardArray = [
			{english: 'Beer', german: 'Bier', type: 'Cuisine', flipped: false},
			{english: 'Mountain', german: 'Berg', type: 'Geography', flipped: false},
			{english: 'Goat', german: 'Ziege', type: 'Animal', flipped: false},
			{english: 'Street', german: 'Straße', type: 'Transportation', flipped: false},
			{english: 'River', german: 'Fluss', type: 'Geography', flipped: false},
			{english: 'Sausage', german: 'Wurst', type: 'Cuisine', flipped: false},
			{english: 'Knight', german: 'Ritter', type: 'Person', flipped: false},
			{english: 'Welcome', german: 'Willkommen', type: 'Greeting', flipped: false},
			{english: 'Island', german: 'Insel', type: 'Geography', flipped: false},
			{english: 'Tree', german: 'Baum', type: 'Plants', flipped: false},
			{english: 'Bear', german: 'Bär', type: 'Animal', flipped: false},
			{english: 'Bridge', german: 'Brücke', type: 'Transportation', flipped: false},
			{english: 'Sun', german: 'Sonne', type: 'Weather', flipped: false},
			{english: 'Library', german: 'Bibliothek', type: 'Place', flipped: false},
			{english: 'Flowers', german: 'Blumen', type: 'Plants', flipped: false},
			{english: 'Nutcracker', german: 'Nussknacker', type: 'Tool', flipped: false},
			{english: 'Clouds', german: 'Wolken', type: 'Weather', flipped: false},
			{english: 'Highway', german: 'Autobahn', type: 'Transportation', flipped: false},
			{english: 'Cheers', german: 'Prost', type: 'Greeting', flipped: false},
			{english: 'Rain', german: 'Regen', type: 'Weather', flipped: false},
			{english: 'City Hall', german: 'Rauthaus', type: 'Place', flipped: false},
			{english: 'Waterfall', german: 'Wasserfall', type: 'Geography', flipped: false},
			{english: 'Pipe', german: 'Rohr', type: 'Tool', flipped: false},
			{english: 'Waitress', german: 'Kellnerin', type: 'Person', flipped: false},
			{english: 'Chocolate', german: 'Shockolade', type: 'Cuisine', flipped: false}
		];

const card = new Vue({
	el: '#card',
	data: {
		cards: cardArray,
		type: ''
	},
	methods: {
		toggleLanguage: function(card) {
			card.flipped = !card.flipped;
		},
		filterList: function(){
			this.type = event.target.value;
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
			const array = cardArray;
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
})		
