class Salad {
    constructor(sortingStrategy) {
        this.vegetables = [];
        this.sortingStrategy = sortingStrategy;
    }

    addVegetable(vegetable) {
        this.vegetables.push(vegetable);
    }

    mix() {
        this.sortingStrategy.sort(this.vegetables);
        let vegetablesString = "Смешиваем салат: ";
        for (const vegetable of this.vegetables) {
            vegetablesString += vegetable.name + ", ";
        }
        vegetablesString = vegetablesString.slice(0, -2); // Удаляем последнюю запятую и пробел
        console.log(vegetablesString);
    }

    filterByCaloriesRange(minCalories, maxCalories) {
        return this.sortingStrategy.filterByCaloriesRange(this.vegetables, minCalories, maxCalories);
    }

    getCalories() {
        let totalCalories = 0;
        for (const vegetable of this.vegetables) {
            totalCalories += vegetable.calories;
        }
        return totalCalories;
    }
}

module.exports = Salad;
