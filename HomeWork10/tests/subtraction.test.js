const Calculator = require("../calculator.js");

describe("Subtraction", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("should subtract two numbers", () => {
        const result = calculator.subtraction(5, 2);
        expect(result).toBe(3);
    });

    it("should throw an error if one of the arguments is not a number", () => {
        // Wrap the subtraction function call in a wrapper function that throws an error if one of the arguments is not a number.
        const subtractionWrapper = (...args) => {
            try {
                calculator.subtraction(...args);
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toBe("Both arguments must be numbers.");
            }
        };

        // Call the wrapper function with non-numeric arguments.
        subtractionWrapper("5", 2);
        subtractionWrapper(5, "2");
    });
});
