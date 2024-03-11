const Calculator = require('../calculator.js');

describe("Умножение", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("должно возвращать произведение двух чисел", () => {
        expect(calculator.multiply(2, 3)).toBe(6);
    });

    it("должно возвращать произведение нескольких чисел", () => {
        expect(calculator.multiply(1, 2, 3, 4, 5)).toBe(120);
    });

    it("должно возвращать 1 для пустого массива", () => {
        expect(calculator.multiply()).toBe(1);
    });
});
