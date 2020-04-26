const INITIAL_STATE = {
	switchOn: false,
	five_thousand: "",
	one_thousand: "",
	five_hundred: "",
	one_hundred: "",
	fifty: "",
	twenty: "",
	ten: "",
	five: "",
	two: "",
	one: "",
};
const amount_given = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "CLICKED_SWITCH":
			return {
				...state,
				switchOn: action.payload,
			};
		case "GIVEN_DENOMS_CHANGE":
			return {
				...state,
				[action.payload.name]: action.payload.val,
			};
		case "EMPTY_GIVEN":
			return {
				...INITIAL_STATE,
			};
		default:
			return state;
	}
};

export default amount_given;
