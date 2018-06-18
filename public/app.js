const cardArray = [
			{english: 'Beer', german: 'Bier', type: 'cuisine', showDetail: false},
			{english: 'Mountain', german: 'Berg', type: 'geography', showDetail: false},
			{english: 'Goat', german: 'Ziege', type: 'animal', showDetail: false},
			{english: 'Street', german: 'Straße', type: 'transportation', showDetail: false},
			{english: 'River', german: 'Fluss', type: 'geography', showDetail: false}
		]

const header = new Vue({
    el: '#header',
    data: {
        title: "Welcome to Leavenworth",
        click: 0
    },
    methods: {
    changeLanguage: function () {
        this.click++;
        this.title = (this.click % 2 == 0) ? "Welcome to Leavenworth" : "Willkommen in Leavenworth";
    }
  }
});

const footer = new Vue({
    el: '#footer',
    data: {
        copyright: "Adam Bodie © "  + new Date().getFullYear(),
    }
});


const card = new Vue({
	el: '#card',
	data: {
		cards: cardArray,
		type: ''
	},
	methods: {
		toggleLanguage: function(card) {
			card.showDetail = !card.showDetail;
		},
		filterList: function(){
			this.type = event.target.value;
		}
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
		}
	}
})
