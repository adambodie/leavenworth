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

const body = new Vue({
    el: '#body',
    data: {
        paragraph: "Lorem ipsum dolor amet kitsch gochujang DIY air plant narwhal shoreditch tumblr YOLO iPhone cardigan cronut iceland. Pour-over poutine disrupt authentic, man braid vice biodiesel. Glossier synth man bun, trust fund keytar hashtag neutra cardigan single-origin coffee shabby chic sriracha banjo celiac direct trade chicharrones. Pop-up food truck everyday carry mixtape intelligentsia."
    }
});

const card = new Vue({
	el: '#card',
	data: {
		cards: [
			{english: 'Beer', german: 'Bier', showDetail: false},
			{english: 'Mountain', german: 'Berg', showDetail: false},
			{english: 'River', german: 'Fluss', showDetail: false},
			{english: 'Street', german: 'Straße', showDetail: false}
		],

	},
	methods: {
		toggleLanguage: function(card) {
			card.showDetail = !card.showDetail;
		}
	}
})
