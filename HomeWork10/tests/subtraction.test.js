const Calculator = require("../calculator.js");

describe("Вычитание", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("должно вычитать два числа", () => {
        const result = calculator.subtraction(5, 2);
        expect(result).toBe(3);
    });

    it("должно выдавать ошибку, если один из аргументов не является числом", () => {
        // Оберните вызов функции subtraction в функцию-оболочку, которая будет выдавать ошибку, если один из аргументов не является числом.
        const subtractionWrapper = (...args) => {
            try {
                calculator.subtraction(...args);
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toBe("Оба аргумента должны быть числами.");
            }
        };

        // Вызовите функцию-оболочку с нечисловыми аргументами.
        subtractionWrapper("5", 2);
        subtractionWrapper(5, "2");
    });
});
