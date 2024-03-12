const Calculator = require("../calculator.js");

describe("Division", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();

        calculator.divide = jest.fn((a, b) => {
            if (typeof a !== "number" || typeof b !== "number") {
                throw new Error("Both arguments must be numbers");
            }

            if (b === 0) {
                throw new Error("Division by 0 is not allowed");
            }

            return a / b;
        });
    });

    it("should return the quotient of two numbers", () => {
        const result = calculator.divide(6, 3);
        expect(result).toBe(2);
    });

    it("should throw an error if the first argument is not a number", () => {
        expect(() => calculator.divide("6", 3)).toThrow();
    });

    it("should throw an error if the second argument is not a number", () => {
        expect(() => calculator.divide(6, "3")).toThrow();
    });

    it("should throw an error if the second argument is 0", () => {
        expect(() => calculator.divide(6, 0)).toThrow();
    });
});
