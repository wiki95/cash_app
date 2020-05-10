import axios from "axios";

export const saveData = async (val) => {
	let config = {
		method: "POST",
		url: `${process.env.REACT_APP_BACKEND}/saveRecord`,
		headers: {
			"content-type": "application/json",
		},
		data: val,
		json: true,
	};
	return await axios(config);
};

export const getData = async (val) => {
	let config = {
		method: "GET",
		url: `${process.env.REACT_APP_BACKEND}/getRecord/${val.day}/${val.id}`,
		headers: {
			"content-type": "application/pdf",
		},
		json: true,
	};
	return await axios(config);
};
