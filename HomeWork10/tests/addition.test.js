const Calculator = require("../calculator.js");

describe("Addition", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("should return the sum of two numbers", () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    it("should return the sum of multiple numbers", () => {
        expect(calculator.add(1, 2, 3, 4, 5)).toBe(15);
    });

    it("should return 0 for an empty array", () => {
        expect(calculator.add()).toBe(0);
    });
});
