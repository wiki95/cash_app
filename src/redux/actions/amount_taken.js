export const total_amount_taken = total => {
	return {
		type: "CHANGE_DENOM",
		payload: total
	};
};

export const calculate_remaining = (val, totalTaken) => {
	return {
		type: "CALCULATE_REMAINING",
		payload: val,
		tTaken: totalTaken
	};
};
