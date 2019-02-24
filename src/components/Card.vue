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
import { mapState, mapMutations } from 'vuex';

export default {
	components: {
		'vue-flip': VueFlip
	},
	methods: mapMutations({
		filterList: function(){
			this.$store.commit('filterList');
		},
		filter: function(){
			this.$store.commit('filter');
		},
		showCards: function(card) {
			this.$store.commit('showCards', card);
		}
	}),
	computed: mapState({
		cards: state => state.cards,
		value: state => state.value,
		type: state => state.type,
		visible: state => state.visible,
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
	})
}
</script>
