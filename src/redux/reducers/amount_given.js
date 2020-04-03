const INITIAL_STATE = {
	switchOn: false
};
const amount_given = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "CLICKED_SWITCH":
			return {
				...state,
				switchOn: action.payload
			};
		default:
			return state;
	}
};

export default amount_given;
