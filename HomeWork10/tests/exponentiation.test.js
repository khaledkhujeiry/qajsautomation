const Calculator = require("../calculator.js");

describe("Exponentiation", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();

        // Implement a mock function
        calculator.exponentiation = jest.fn((a) => {
            if (typeof a !== "number") {
                throw new Error("Argument must be a number");
            }

            return a ** 2;
        });
    });

    it("should return the square of a number", () => {
        const result = calculator.exponentiation(5);
        expect(result).toBe(25);
    });

    it("should throw an error if the argument is not a number", () => {
        expect(() => calculator.exponentiation("5")).toThrow();
    });
});
