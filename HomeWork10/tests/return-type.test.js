const Calculator = require("../calculator.js");

describe("Return Type Verification", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("should return a number for addition", () => {
        expect(typeof calculator.add(1, 2)).toBe("number");
    });

    it("should return a number for multiplication", () => {
        expect(typeof calculator.multiply(2, 3)).toBe("number");
    });

    it("should return a number for subtraction", () => {
        expect(typeof calculator.subtraction(5, 2)).toBe("number");
    });

    it("should return a number for division", () => {
        expect(typeof calculator.divide(6, 3)).toBe("number");
    });

    it("should return a number for exponentiation", () => {
        expect(typeof calculator.exponentiation(5)).toBe("number");
    });
});
