const cardArray = [
			{english: 'Beer', german: 'Bier', type: 'Cuisine', flipped: false, visible: true},
			{english: 'Mountain', german: 'Berg', type: 'Geography', flipped: false, visible: true},
			{english: 'Goat', german: 'Ziege', type: 'Animal', flipped: false, visible: true},
			{english: 'Street', german: 'Straße', type: 'Transportation', flipped: false, visible: true},
			{english: 'River', german: 'Fluss', type: 'Geography', flipped: false, visible: true},
			{english: 'Sausage', german: 'Wurst', type: 'Cuisine', flipped: false, visible: true},
			{english: 'Knight', german: 'Ritter', type: 'Person', flipped: false, visible: true},
			{english: 'Welcome', german: 'Willkommen', type: 'Greeting', flipped: false, visible: true},
			{english: 'Island', german: 'Insel', type: 'Geography', flipped: false, visible: true},
			{english: 'Tree', german: 'Baum', type: 'Plants', flipped: false, visible: true},
			{english: 'Bear', german: 'Bär', type: 'Animal', flipped: false, visible: true},
			{english: 'Bridge', german: 'Brücke', type: 'Transportation', flipped: false, visible: true},
			{english: 'Sun', german: 'Sonne', type: 'Weather', flipped: false, visible: true},
			{english: 'Library', german: 'Bibliothek', type: 'Place', flipped: false, visible: true},
			{english: 'Goodbye', german: 'Auf Wiedersehen', type: 'Greeting', flipped: false, visible: true},
			{english: 'Flowers', german: 'Blumen', type: 'Plants', flipped: false, visible: true},
			{english: 'Nutcracker', german: 'Nussknacker', type: 'Tool', flipped: false, visible: true},
			{english: 'Clouds', german: 'Wolken', type: 'Weather', flipped: false, visible: true},
			{english: 'Highway', german: 'Autobahn', type: 'Transportation', flipped: false, visible: true},
			{english: 'Cheers', german: 'Prost', type: 'Greeting', flipped: false, visible: true},
			{english: 'Blackbird', german: 'Amsel', type: 'Animal', flipped: false, visible: true},
			{english: 'Rain', german: 'Regen', type: 'Weather', flipped: false, visible: true},
			{english: 'City Hall', german: 'Rauthaus', type: 'Place', flipped: false, visible: true},
			{english: 'Waterfall', german: 'Wasserfall', type: 'Geography', flipped: false, visible: true},
			{english: 'Pipe', german: 'Rohr', type: 'Tool', flipped: false, visible: true},
			{english: 'Waitress', german: 'Kellnerin', type: 'Person', flipped: false, visible: true},
			{english: 'Icicle', german: 'Eiszapfen', type: 'Tool', flipped: false, visible: true},
			{english: 'Chocolate', german: 'Shockolade', type: 'Cuisine', flipped: false, visible: true}
		];

const card = new Vue({
	el: '#card',
	data: {
		cards: cardArray,
		type: '',
		visible: true,
		checked: false
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
