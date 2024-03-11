const Calculator = require("../calculator.js");

describe("Сложение", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("должно возвращать сумму двух чисел", () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    it("должно возвращать сумму нескольких чисел", () => {
        expect(calculator.add(1, 2, 3, 4, 5)).toBe(15);
    });
    
    it("должно возвращать 0 для пустого массива", () => {
        expect(calculator.add()).toBe(0);
    });
});
