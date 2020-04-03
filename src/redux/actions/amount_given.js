export const onSwitch = bool => {
	return {
		type: "CLICKED_SWITCH",
		payload: bool
	};
};
