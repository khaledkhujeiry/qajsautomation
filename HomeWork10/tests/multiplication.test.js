const Calculator = require("../calculator.js");

describe("Multiplication", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("should return the product of two numbers", () => {
        expect(calculator.multiply(2, 3)).toBe(6);
    });

    it("should return the product of multiple numbers", () => {
        expect(calculator.multiply(1, 2, 3, 4, 5)).toBe(120);
    });

    it("should return 1 for an empty array", () => {
        expect(calculator.multiply()).toBe(1);
    });
});
