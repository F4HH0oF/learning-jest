let animals = [];

describe("animals array", () => {
	beforeAll(() => {
		animals = ["bear", "elephant", "lion", "cow"];
	});
	beforeEach(() => {
		animals = ["bear", "elephant", "lion", "cow"];
	});
	it("should add animal at the end of an array", () => {
		animals.push("aligator");
		expect(animals[animals.length - 1]).toBe("aligator");
	});
	it("should add animal at the beginning of an array", () => {
		animals.unshift("monkey");
		expect(animals[0]).toBe("monkey");
	});
	it("should have initial length of 4", () => {
		expect(animals.length).toBe(4);
	});
});

describe("testing smth else", () => {
	it("should be truthy", () => {
		expect(true).toBeTruthy();
	});
});
