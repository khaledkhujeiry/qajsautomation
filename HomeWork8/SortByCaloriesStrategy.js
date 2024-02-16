// Стратегия (Strategy):
// Класс SortByCaloriesStrategy представляет стратегию сортировки овощей по калорийности.
// У него есть метод compare, который определяет правило сравнения двух овощей по калориям.
// В классе Salad есть метод sortVegetables, который принимает функцию сравнения в качестве аргумента и сортирует овощи в салате.
// В файле main.js создается экземпляр SortByCaloriesStrategy и передается в метод sortVegetables для сортировки овощей по калориям.

// Стратегия сортировки овощей по калориям
class SortByCaloriesStrategy {
    sort(vegetables) {
        vegetables.sort((a, b) => a.calories - b.calories);
    }

    filterByCaloriesRange(vegetables, minCalories, maxCalories) {
        return vegetables.filter((vegetable) => vegetable.calories >= minCalories && vegetable.calories <= maxCalories);
    }
}

module.exports = SortByCaloriesStrategy;
