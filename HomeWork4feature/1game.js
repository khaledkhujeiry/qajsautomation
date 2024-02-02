//Задача 1.

let numRolls = 3; // Количество бросков кубика
let player1Results = []; // Результаты игрока 1
let player2Results = []; // Результаты игрока 2

// Бросаем кубики numRolls раз и сохраняем результаты
for (let i = 0; i < numRolls; i++) {
  let player1Roll = Math.floor(Math.random() * 6) + 1; // Бросок игрока 1
  let player2Roll = Math.floor(Math.random() * 6) + 1; // Бросок игрока 2

  player1Results.push(player1Roll); // Добавляем результат броска игрока 1 в массив
  player2Results.push(player2Roll); // Добавляем результат броска игрока 2 в массив
}

let player1Sum = 0; // Сумма результатов игрока 1
for (let i = 0; i < player1Results.length; i++) {
  player1Sum += player1Results[i]; // Суммируем результаты игрока 1
}

let player2Sum = 0; // Сумма результатов игрока 2
for (let i = 0; i < player2Results.length; i++) {
  player2Sum += player2Results[i]; // Суммируем результаты игрока 2
}

// Выводим результаты игры
console.log("Результаты игры (" + numRolls + " бросков):");
console.log("Игрок 1: " + player1Results.join(", ") + " (Сумма: " + player1Sum + ")");
console.log("Игрок 2: " + player2Results.join(", ") + " (Сумма: " + player2Sum + ")");

// Определяем победителя или объявляем ничью
if (player1Sum > player2Sum) {
  console.log("Игрок 1 выиграл!");
} else if (player2Sum > player1Sum) {
  console.log("Игрок 2 выиграл!");
} else {
  console.log("Ничья!");
}