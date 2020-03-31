export const total_amount_taken = total => {
	return {
		type: "CHANGE_DENOM",
		payload: total
	};
};
