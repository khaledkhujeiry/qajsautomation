function insertArrayAt(arr, index, toInsert) {
    // Новый массив, в который будем вставлять элементы
    let newArr = arr.slice(0, index); // копируем часть массива до индекса в новый массив
    newArr = newArr.concat(toInsert);  // добавляем вставляемый массив в новый массив
    newArr = newArr.concat(arr.slice(index));  // добавляем оставшуюся часть исходного массива
    return newArr;
  }
  
  let arr = [1, 2, 3, 4, 5];
  let toInsert = ['a', 'b', 'c'];
  let index = 3;
  
  let resultArr = insertArrayAt(arr, index, toInsert);
  console.log(resultArr);  // возвращает [1, 2, 3, 'a', 'b', 'c', 4, 5]