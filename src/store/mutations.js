const mutations = {
		removeCard: (state, payload) => state.cards[payload].visible = !state.cards[payload].visible,
		setValue: (state, value) => {state.value = value},
		setType: (state, type) => {state.type = type},
};

export default mutations;