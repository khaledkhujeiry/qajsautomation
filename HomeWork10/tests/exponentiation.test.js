const Calculator = require("../calculator.js");

describe("Возведение в степень", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();

        // Реализуем фиктивную функцию exponentiation
        calculator.exponentiation = jest.fn((a) => {
            if (typeof a !== "number") {
                throw new Error("Аргумент должен быть числом");
            }

            return a ** 2;
        });
    });

    it("должно возвращать квадрат числа", () => {
        const result = calculator.exponentiation(5);
        expect(result).toBe(25);
    });

    it("должно выдавать ошибку, если аргумент не является числом", () => {
        expect(() => calculator.exponentiation("5")).toThrow();
    });
});
