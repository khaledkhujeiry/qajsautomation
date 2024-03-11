const Calculator = require("../calculator.js");

describe("Дополнительные тесты", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe("Обработка отрицательных чисел", () => {
        it("должно возвращать сумму отрицательных чисел", () => {
            expect(calculator.add(-1, -2)).toBe(-3);
        });

        it("должно возвращать произведение отрицательных чисел", () => {
            expect(calculator.multiply(-2, -3)).toBe(6);
        });

        it("должно возвращать разность отрицательных чисел", () => {
            expect(calculator.subtraction(-5, -2)).toBe(-3);
        });

        it("должно возвращать частное отрицательных чисел", () => {
            expect(calculator.divide(-6, -3)).toBe(2);
        });
    });

    describe("Обработка чисел с плавающей точкой", () => {
        it("должно возвращать сумму чисел с плавающей точкой", () => {
            expect(calculator.add(1.5, 2.5)).toBe(4);
        });

        it("должно возвращать произведение чисел с плавающей точкой", () => {
            expect(calculator.multiply(2.5, 3.5)).toBe(8.75);
        });

        it("должно возвращать разность чисел с плавающей точкой", () => {
            expect(calculator.subtraction(5.5, 2.5)).toBe(3);
        });

        it("должно возвращать частное чисел с плавающей точкой", () => {
            expect(calculator.divide(6.5, 3.5)).toBe(1.8571428571428572);
        });
    });
});
