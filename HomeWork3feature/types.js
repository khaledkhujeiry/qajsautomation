// 1. Сложение различных типов
console.log('Сложение различных типов:');
let strBoolAdd = 'string' + true;
console.log(`'string' + true: ${strBoolAdd}`);

let strNumAdd = '2' + 2;
console.log(`'2' + 2: ${strNumAdd}`);

let numBoolAdd = 1 + true;
console.log(`1 + true: ${numBoolAdd}`);
console.log();

// 2. Умножение различных типов
console.log('Умножение различных типов:');
let strBoolMul = '3' * true;
console.log(`'3' * true: ${strBoolMul}`);

let strNumMul = '3' * 2;
console.log(`'3' * 2: ${strNumMul}`);

let numBoolMul = 2 * true;
console.log(`2 * true: ${numBoolMul}`);
console.log();

// 3. Деление различных типов
console.log('Деление различных типов:');
let strBoolDiv = '10' / true;
console.log(`'10' / true: ${strBoolDiv}`);

let strNumDiv = '10' / 2;
console.log(`'10' / 2: ${strNumDiv}`);

let numBoolDiv = 10 / true;
console.log(`10 / true: ${numBoolDiv}`);
console.log();

// 4. Явное преобразование
console.log('Явное преобразование:');
let numConv = Number('123');
console.log(`Number('123'): ${numConv}`);

let strConv = String(123);
console.log(`String(123): ${strConv}`);

let boolConv1 = Boolean(1);
console.log(`Boolean(1): ${boolConv1}`);

let boolConv0 = Boolean(0);
console.log(`Boolean(0): ${boolConv0}`);
