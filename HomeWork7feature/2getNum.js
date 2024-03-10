// Функция, возвращающая промис с задержкой и выводящая случайное число в указанном диапазоне
function getNum(min, max, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            resolve({ number: randomNumber, min, max });
        }, delay);
    });
}

function squareAndPrint({ number, min, max }) {
    const squaredNumber = number * number;
    console.log(`Рандомное число от ${min} до ${max} выпал: ${number}, число в квадрате: ${squaredNumber}`);
}

async function processRandomNumbers() {
    try {
        const { number: num1, min: min1, max: max1 } = await getNum(1, 5, 3000);
        squareAndPrint({ number: num1, min: min1, max: max1 });

        const { number: num2, min: min2, max: max2 } = await getNum(6, 10, 5000);
        squareAndPrint({ number: num2, min: min2, max: max2 });

        const sum = num1 + num2;
        console.log("Сумма двух рандомных чисел:", sum);
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

processRandomNumbers();
