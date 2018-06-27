<template lang="pug">
    div#card
      h1 English-German Flash Cards
      select(v-on:change="filterList")
        option(value="") Select type of cards...
        option(v-for="item in uniqueCardsList") {{item}}
      .showAll
        input(type="checkbox" v-model="checked" v-on:change="showAllCards()" )
        |  Show All Cards
      ul.card-list
        li(v-bind:class="{ invisible: !card.visible }" v-show="type === '' || type === card.type" v-for="(card, index) in shuffleCards"  v-on:click="toggleLanguage(card)")
          transition(name="flip")
            p(v-if="!card.flipped" key="english").card {{card.english}}
              span.language English
              span(v-on:click="showCards(card)").delete-card X
            p(v-else key="german").card {{card.german}}
              span.language German
              span(v-on:click="showCards(card)").delete-card X
</template>

<script>
import Vue from 'vue'

export default {
	name: 'Card', 
	data () {
		return {
			cards: cardArray,
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
}
</script>
