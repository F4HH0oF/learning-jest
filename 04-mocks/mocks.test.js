const axios = require("axios");

const fetchData = async (id) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	return data;
};

describe("mock axios", () => {
	it("should mock axios", async () => {
		jest.spyOn(axios, "get").mockReturnValueOnce({
			data: {
				id: 1,
				todo: "Hello",
			},
		});

		const results = await fetchData(1);

		expect(results.todo).toBe("Hello");
		expect(results.id).toBe(1);
	});
});

////////////////////////////////////
const forEach = (items, callback) => {
	for (let i = 0; i < items.length; i++) {
		callback(items[i]);
	}
};

it("should mock callback", () => {
	const mockCallback = jest.fn((x) => x + 42);
	forEach([0, 1], mockCallback);

	expect(mockCallback.mock.calls.length).toBe(2);
	// [ call1, call2 ]
	expect(mockCallback.mock.calls[0][0]).toBe(0);
	expect(mockCallback.mock.calls[0][0]).toBe(0);

	expect(mockCallback.mock.results[0].value).toBe(42);
	expect(mockCallback.mock.results[1].value).toBe(43);
});

it("should mock return", () => {
	const mock = jest.fn();
	mock.mockReturnValue(true).mockRejectedValue(false).mockReturnValue(true);

	const results = mock();
	expect(results).toBe(true);
});
