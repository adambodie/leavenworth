<template>
	<div>
		<div class="options">
			<div class="type">
			<select v-on:change="filterList">
				<option value="">Select type of cards...</option>
				<option v-for="(item, index) in uniqueCardsList" :key="index">{{item}}</option>
			</select>
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
				v-show="(index <= value && type === '') || type === card.type" 
				v-for="(card, index) in shuffleCards" 
				:key="card.id"
			>
				<vue-flip :active-click="true" width="259px" height="345px" transition="0.4s" >
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
	methods: {
		filterList: function(){
			this.value = '';
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
		}
	},
	computed: {
		cards () {
			return this.$store.state.cards
		},
		value () {
			return this.$store.state.value
		},
		type () {
			return this.$store.state.type
		},
		visible () {
			return this.$store.state.visible
		},
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
