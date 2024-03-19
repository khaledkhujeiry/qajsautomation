const VegetableFactory = require("./VegetableFactory");
const SortByCaloriesStrategy = require("./SortByCaloriesStrategy");
const Salad = require("./Salad");

const vegetableFactory = new VegetableFactory();
const carrot = vegetableFactory.createVegetable("carrot", "Морковь", 50);
const tomato = vegetableFactory.createVegetable("tomato", "Помидор", 30);
const pepper = vegetableFactory.createVegetable("pepper", "Перец", 40);
const cucumber = vegetableFactory.createVegetable("cucumber", "Огурец", 20);

const salad = new Salad(new SortByCaloriesStrategy());
salad.addVegetable(carrot);
salad.addVegetable(tomato);
salad.addVegetable(pepper);
salad.addVegetable(cucumber);

salad.mix();

const minCalories = 20;
const maxCalories = 40;
const filteredVegetables = salad.filterByCaloriesRange(minCalories, maxCalories);

console.log(`Овощи с калориями от ${minCalories} до ${maxCalories}:`);
for (const vegetable of filteredVegetables) {
    console.log(vegetable.getInfo());
}

const totalCalories = salad.getCalories();
console.log(`Калорийность салата: ${totalCalories} калорий`);
