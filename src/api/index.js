import axios from "axios";

export const saveData = async (val) => {
	let config = {
		method: "POST",
		url: `${process.env.REACT_APP_BACKEND}/saveData`,
		headers: {
			"content-type": "application/json",
		},
		data: val,
		json: true,
	};
	return await axios(config);
};
