const INITIAL_STATE = {
	total: 0,
	toGive: 0
};
const amount_taken = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "CHANGE_DENOM":
			return {
				...state,
				total: parseFloat(action.payload).toFixed(2)
			};
		case "CALCULATE_REMAINING":
			return {
				...state,
				toGive: parseFloat(
					parseFloat(state.total) - parseFloat(action.payload)
				).toFixed(2)
			};
		default:
			return state;
	}
};

export default amount_taken;
