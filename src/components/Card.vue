<template>
	<div>
		<div class="options">
			<div class="type">
			<select v-on:change="filterListByType">
				<option value="">Select type of cards...</option>
				<option v-for="(item, index) in uniqueCardsList" :key="index" v-bind:data-testid="item">{{item}}</option>
			</select>
			</div>
			<div class="filter">
				<select v-on:change="filterListByAmount">
					<option value="">Filter by Amount...</option>
					<option v-for="(card, index) in cards" v-bind:value="index" :key="index" v-bind:data-testid="index">
						{{ index + 1 }}
					</option>
				</select>
			</div>
		</div>
		<transition-group name="flip" tag="ul" class="card-list">
			<li 
				v-bind:class="{ invisible: !card.visible }"
				v-bind:data-testid="index"
				v-show="(index <= value && type === '') || type === card.type" 
				v-for="(card, index) in shuffleCards" 
				:key="card.id"
			>
				<vue-flip :active-click="true" width="259px" height="345px" transition="0.4s" >
					<p slot="front" class="card" key="english">{{card.english}}
						<span class="language">English</span>
						<span class="delete-card" v-on:click="removeCard(index)">X</span>
					</p>
					<p slot="back" class="card" key="german">{{card.german}}
						<span class="language">German</span>
						<span class="delete-card" v-on:click="removeCard(index)">X</span>
					</p>
				</vue-flip>
			</li>
		</transition-group>
	</div>
</template>

<script>
import VueFlip from 'vue-flip';
import { mapState } from 'vuex';

export default {
	components: {
		'vue-flip': VueFlip
	},
	methods: {
		filterListByType(){
			this.$store.dispatch('filterListByType');
		},
		filterListByAmount(){
			this.$store.dispatch('filterListByAmount');
		},
		removeCard(card) {
			this.$store.commit('removeCard', card);
		}
	},
	computed: mapState({
		cards: state => state.cards,
		value: state => state.value,
		type: state => state.type,
		visible: state => state.visible,
		uniqueCardsList() {
			const types = [];
			this.cards.forEach((card) => {
				if(!types.includes(card.type)) {
					types.push(card.type);
				}
			});
			return types;
		},
		shuffleCards() {
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
