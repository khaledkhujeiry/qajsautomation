function checkEqualSums(number) {
    // Преобразуем число в строку для удобства работы с цифрами
    const numStr = number.toString();
  
    // Проверяем, что строка состоит из шести символов (цифр)
    if (numStr.length !== 6) {
      return 'Число должно состоять из шести цифр!';
    }
  
    // Делим строку на две половины (по три цифры в каждой)
    const firstHalf = numStr.slice(0, 3);
    const secondHalf = numStr.slice(3);
  
    // Суммируем цифры в каждой половине с использованием метода reduce и функции parseInt для преобразования символов в целые числа
    const sumFirstHalf = firstHalf.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    const sumSecondHalf = secondHalf.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  
    // Сравниваем результаты суммирования и возвращаем 'да' или 'нет' в зависимости от результата
    return sumFirstHalf === sumSecondHalf ? 'Да' : 'Нет';
  }
  
  // Использование функции
  const number = 123241;
  console.log(checkEqualSums(number));