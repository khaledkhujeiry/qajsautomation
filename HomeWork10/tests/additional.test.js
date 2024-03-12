const Calculator = require("../calculator.js");

describe("Additional Tests", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe("Handling Negative Numbers", () => {
        it("should return the sum of negative numbers", () => {
            expect(calculator.add(-1, -2)).toBe(-3);
        });

        it("should return the product of negative numbers", () => {
            expect(calculator.multiply(-2, -3)).toBe(6);
        });

        it("should return the difference of negative numbers", () => {
            expect(calculator.subtraction(-5, -2)).toBe(-3);
        });

        it("should return the quotient of negative numbers", () => {
            expect(calculator.divide(-6, -3)).toBe(2);
        });
    });

    describe("Handling Floating Point Numbers", () => {
        it("should return the sum of floating point numbers", () => {
            expect(calculator.add(1.5, 2.5)).toBe(4);
        });

        it("should return the product of floating point numbers", () => {
            expect(calculator.multiply(2.5, 3.5)).toBe(8.75);
        });

        it("should return the difference of floating point numbers", () => {
            expect(calculator.subtraction(5.5, 2.5)).toBe(3);
        });

        it("should return the quotient of floating point numbers", () => {
            expect(calculator.divide(6.5, 3.5)).toBe(1.8571428571428572);
        });
    });
});
