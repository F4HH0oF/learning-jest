const axios = require("axios");

const fetchData = async (id) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	return data;
};

module.exports = fetchData;
