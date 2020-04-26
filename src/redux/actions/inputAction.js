export const pushItem = (val, total) => {
	return {
		type: "HIT_ENTER",
		payload: val,
		total: total,
	};
};
export const removeItem = (filterData, total) => {
	return {
		type: "DELETE_ITEM",
		payload: filterData,
		total: total,
	};
};

export const emptyList = () => {
	return { type: "EMPTY_LIST", payload: [] };
};
