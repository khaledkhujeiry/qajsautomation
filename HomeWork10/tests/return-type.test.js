const Calculator = require('../calculator.js');

describe("Проверка возвращаемого типа", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("должно возвращать число для сложения", () => {
        expect(typeof calculator.add(1, 2)).toBe("number");
    });

    it("должно возвращать число для умножения", () => {
        expect(typeof calculator.multiply(2, 3)).toBe("number");
    });

    it("должно возвращать число для вычитания", () => {
        expect(typeof calculator.subtraction(5, 2)).toBe("number");
    });

    it("должно возвращать число для деления", () => {
        expect(typeof calculator.divide(6, 3)).toBe("number");
    });

    it("должно возвращать число для возведения в степень", () => {
        expect(typeof calculator.exponentiation(5)).toBe("number");
    });
});
