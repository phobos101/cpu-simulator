import { fullAdder } from "..";

describe("Adders - Full Adder", () => {
	test("default to output { sum: 0, carry: 0 }", () => {
		expect(fullAdder()).toStrictEqual({
			sum: 0b0,
			carry: 0b0,
		});
	});

	test("0 0 0 to output { sum: 0, carry: 0 }", () => {
		expect(fullAdder(0b0, 0b0, 0b0)).toStrictEqual({
			sum: 0b0,
			carry: 0b0,
		});
	});

	test("0 0 1 to to output { sum: 1, carry: 0 }", () => {
		expect(fullAdder(0b0, 0b0, 0b1)).toStrictEqual({
			sum: 0b1,
			carry: 0b0,
		});
	});

	test("0 1 0 to to output { sum: 1, carry: 0 }", () => {
		expect(fullAdder(0b0, 0b1, 0b0)).toStrictEqual({
			sum: 0b1,
			carry: 0b0,
		});
	});

	test("0 1 1 to to output { sum: 0, carry: 1 }", () => {
		expect(fullAdder(0b0, 0b1, 0b1)).toStrictEqual({
			sum: 0b0,
			carry: 0b1,
		});
	});

	test("1 0 0 to output { sum: 1, carry: 0 }", () => {
		expect(fullAdder(0b1, 0b0, 0b0)).toStrictEqual({
			sum: 0b1,
			carry: 0b0,
		});
	});

	test("1 0 1 to to output { sum: 0, carry: 1 }", () => {
		expect(fullAdder(0b1, 0b0, 0b1)).toStrictEqual({
			sum: 0b0,
			carry: 0b1,
		});
	});

	test("1 1 0 to to output { sum: 0, carry: 1 }", () => {
		expect(fullAdder(0b1, 0b1, 0b0)).toStrictEqual({
			sum: 0b0,
			carry: 0b1,
		});
	});

	test("1 1 1 to to output { sum: 1, carry: 1 }", () => {
		expect(fullAdder(0b1, 0b1, 0b1)).toStrictEqual({
			sum: 0b1,
			carry: 0b1,
		});
	});
});
