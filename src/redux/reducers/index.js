import { combineReducers } from "redux";
import addList from "./addList";
import amount_taken from "./amount_taken";

const reducers = combineReducers({
	addList,
	amount_taken
});

export default reducers;
