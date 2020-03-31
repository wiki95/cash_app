const INITIAL_STATE = {
	total: 0,
	listData: []
};
const addList = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "HIT_ENTER":
			return {
				...state,
				total: action.total,
				listData: state.listData.concat({ title: action.payload })
			};
		case "DELETE_ITEM":
			return {
				...state,
				total: action.total,
				listData: action.payload
			};
		default:
			return state;
	}
};

export default addList;
