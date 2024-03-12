const Calculator = require("../calculator.js");

describe("Performance Testing", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("should perform addition on large data sets within a reasonable time", () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expectedSum = 55;

        const start = performance.now();
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i];
        }
        const end = performance.now();

        expect(sum).toBe(expectedSum);
        expect(end - start).toBeLessThan(100); // 100 milliseconds
    });

    it("should perform multiplication on large data sets within a reasonable time", () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expectedProduct = 3628800;

        const start = performance.now();
        let product = 1;
        for (let i = 0; i < data.length; i++) {
            product *= data[i];
        }
        const end = performance.now();

        expect(product).toBe(expectedProduct);
        expect(end - start).toBeLessThan(100); // 100 milliseconds
    });
});
