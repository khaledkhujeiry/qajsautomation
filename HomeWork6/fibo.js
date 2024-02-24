// Функция, возвращающая массив ряда Фибоначчи начиная с N-го элемента и имеющая длину M
function fibonacciArray(N, M) {
    // Пустой массив, который будем хранить элементы ряда Фибоначчи
    let result = [];
  
    // Первые два числа Фибоначчи уже известны: 0 и 1
    let a = 0, b = 1;
  
    // Записывать числа, начиная с N-го
    for (let i = 0; i < N + M; i++) {
        if (i >= N) {
            result.push(a);
        }
        let next = a + b;
        a = b;
        b = next;
    }
    return result;
}

let fibSeries = fibonacciArray(0, 10);
console.log(fibSeries);