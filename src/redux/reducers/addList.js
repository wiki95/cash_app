const INITIAL_STATE = {
	total: 0,
	listData: [],
};
const addList = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "HIT_ENTER":
			return {
				...state,
				total: parseFloat(action.total).toFixed(2),
				listData: state.listData.concat({ title: action.payload }),
			};
		case "DELETE_ITEM":
			return {
				...state,
				total: parseFloat(action.total).toFixed(2),
				listData: action.payload,
			};
		case "EMPTY_LIST":
			return { ...INITIAL_STATE };
		default:
			return state;
	}
};

export default addList;
