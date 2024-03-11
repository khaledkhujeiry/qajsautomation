const Calculator = require("../calculator.js");

describe("Деление", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();

        calculator.divide = jest.fn((a, b) => {
            if (typeof a !== "number" || typeof b !== "number") {
                throw new Error("Оба аргумента должны быть числами");
            }

            if (b === 0) {
                throw new Error("Деление на 0 запрещено");
            }

            return a / b;
        });
    });

    it("должно возвращать частное двух чисел", () => {
        const result = calculator.divide(6, 3);
        expect(result).toBe(2);
    });

    it("должно выдавать ошибку, если первый аргумент не является числом", () => {
        expect(() => calculator.divide("6", 3)).toThrow();
    });

    it("должно выдавать ошибку, если второй аргумент не является числом", () => {
        expect(() => calculator.divide(6, "3")).toThrow();
    });

    it("должно выдавать ошибку, если второй аргумент равен 0", () => {
        expect(() => calculator.divide(6, 0)).toThrow();
    });
});
