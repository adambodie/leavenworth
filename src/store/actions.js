const actions = {
	filterListByType: ({ commit }) => {
		commit('setValue', ''),
		commit('setType', event.target.value)
	},
	filterListByAmount: ({ commit, state }) => {
		commit('setValue', event.target.value),
		commit('setType', ''),
		state.cards.forEach((card, index) => {
				if (state.value === 'Filter by Amount...'){
					card.visible = true;
				} 
				card.visible = (index > state.value) ? false : true
			});
	}
};

export default actions;