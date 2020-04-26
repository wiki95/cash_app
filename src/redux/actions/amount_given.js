export const onSwitch = (bool) => {
	return {
		type: "CLICKED_SWITCH",
		payload: bool,
	};
};

export const givenDenomChange = (name, val) => {
	return {
		type: "GIVEN_DENOMS_CHANGE",
		payload: {
			name,
			val,
		},
		name: name,
	};
};

export const emptyGiven = () => {
	return {
		type: "EMPTY_GIVEN",
	};
};
