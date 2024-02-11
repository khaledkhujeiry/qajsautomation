function checkEqualSums(number) {
  const numStr = number.toString(); // Преобразуем число в строку

  if (numStr.length % 2 !== 0) { // Проверяем, что количество цифр в числе четное
    return 'Число должно состоять из четного количества цифр!';
  }

  const halfLength = numStr.length / 2; // Вычисляем половину длины строки
  const firstHalf = numStr.slice(0, halfLength); // Получаем первую половину числа
  const secondHalf = numStr.slice(halfLength); // Получаем вторую половину числа

  // Суммируем цифры в каждой половине с использованием метода reduce и функции Number для преобразования символов в целые числа
  const sumFirstHalf = Array.from(firstHalf, Number).reduce((acc, digit) => acc + digit, 0);
  const sumSecondHalf = Array.from(secondHalf, Number).reduce((acc, digit) => acc + digit, 0);

  // Сравниваем результаты суммирования
  return sumFirstHalf === sumSecondHalf ? 'Да' : 'Нет';
}

const number = 12324013;
console.log(checkEqualSums(number));