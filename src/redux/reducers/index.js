import { combineReducers } from "redux";
import addList from "./addList";
import amount_taken from "./amount_taken";
import amount_given from "./amount_given";

const reducers = combineReducers({
	addList,
	amount_taken,
	amount_given
});

export default reducers;
