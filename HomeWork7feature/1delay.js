// Функция, возвращающая промис с задержкой
function delayedProm(number) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 5 + 1) * 1000;
        setTimeout(() => {
            resolve({ number: number, delay: delay / 1000 + " сек" });
        }, delay);
    });
}

// Создаем массив из 3 промисов
const promises = [delayedProm(1), delayedProm(2), delayedProm(3)];

async function run() {
    try {
        // Ждем загрузки первого сработавшего промиса
        const result = await Promise.race(promises);

        // Выводим результат на экран
        console.log(`Первым сработал ${result.number}-й промис.`, "Время задержки:", result.delay);
    } catch (error) {
        // Обрабатываем возможные ошибки
        console.error(error);
    }
}

run();
