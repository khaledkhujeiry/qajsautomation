function findAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0); // Суммируем все элементы массива
    const average = sum / arr.length;  // Находим среднее арифметическое

    return average;
  }
  
  // Использование функции
  const array = [12, 15, 20, 25, 59, 79];
  const result = findAverage(array);
  console.log('Среднее арифметическое массива:', result);