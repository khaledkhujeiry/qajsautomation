let num1 = 3487;
let num2 = 3794;
let str1 = num1.toString(); // Преобразуем первое число в строку
let str2 = num2.toString(); // Преобразуем второе число в строку
let matchValueAndPosition = 0; // Счетчик совпадений по значению и позиции
let matchValueOnly = 0; // Счетчик совпадений только по значению

// Проходимся по каждой цифре и сравниваем их
for (let i = 0; i < str1.length; i++) {
  if (str1[i] === str2[i]) {
    matchValueAndPosition++; // Если цифры совпали по значению и позиции, увеличиваем счетчик
  } else if (str2.includes(str1[i])) {
    matchValueOnly++; // Если цифры совпали только по значению, увеличиваем счетчик
  }
}

console.log(`Совпадений по значению и позиции: ${matchValueAndPosition}`);
console.log(`Совпадений только по значению: ${matchValueOnly}`);