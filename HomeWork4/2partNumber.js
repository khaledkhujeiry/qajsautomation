let number = 15;
let parts = 3;
let result = [];
let sum = 0;

// Разбиение на целые числа
for (let i = 0; i < parts - 1; i++) {
  let min = 1;
  let max = number - sum - (parts - i - 1);
  let random = Math.random() * (max - min) + min;
  result.push(Math.floor(random));
  sum += Math.floor(random);
}
result.push(number - sum);
console.log(`Решение целыми числами: ${result.join(', ')}`);

// Разбиение на числа с двумя знаками после запятой
result = [];
sum = 0;
for (let i = 0; i < parts - 1; i++) {
  let min = 0.01;
  let max = number - sum - (parts - i - 1);
  let random = Math.random() * (max - min) + min;
  result.push(random.toFixed(2));
  sum += random;
}
result.push((number - sum).toFixed(2));
console.log(`Решение дробными числами: ${result.join(', ')}`);