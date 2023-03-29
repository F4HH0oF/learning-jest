const sum = require("./sum");

describe("Example tests", () => {
	it("should add 1 and 2 to equal 3", () => {
		expect(sum(1, 2)).toBe(3);
	});
	it("object assignment", () => {
		const obj = {};
		expect(obj).toEqual({});
	});
});

describe("truthy or falsy", () => {
	it("should be falsy", () => {
		expect(null).toBeFalsy();
	});
	it(`should be truthy ${2 + 2}`, () => {
		expect(1).toBeTruthy();
	});
	it("should be null", () => {
		expect(null).toBeNull();
	});
	it("should be undefined", () => {
		expect(undefined).toBeUndefined();
	});
	it("should not be undefined", () => {
		expect(1).not.toBeUndefined();
	});
});

describe("numbers", () => {
	it("should be 4", () => {
		const value = 2 + 2;
		expect(value).toBe(4);
		expect(value).toBeGreaterThan(2);
		expect(value).toBeGreaterThanOrEqual(4);
		expect(value).toBeLessThan(5);
	});
	it("should add floats", () => {
		const value = 0.1 + 0.2;
		expect(value).toBeCloseTo(0.2999999999);
	});
});

describe("strings", () => {
	it("should not be i in team", () => {
		expect("team").not.toMatch(/I/);
	});
});

describe("arrays", () => {
	const shoppingList = ["chocolate", "milk", "eggs"];
	expect(shoppingList).toContain("milk");
});

const compileCode = () => {
	throw new Error("you are using the wrong JDK");
};
describe("exceptions", () => {
	it("compiling goes as expected", () => {
		expect(() => {
			compileCode();
		}).toThrowError("you are using the wrong JDK");
	});
});
