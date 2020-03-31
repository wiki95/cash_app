const INITIAL_STATE = {
	total: 0
};
const amount_taken = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "CHANGE_DENOM":
			return {
				...state,
				total: action.payload
			};
		default:
			return state;
	}
};

export default amount_taken;
