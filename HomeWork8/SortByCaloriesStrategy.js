// Стратегия (Strategy):
// Класс SortByCaloriesStrategy представляет стратегию сортировки овощей по калорийности.
// У него есть метод sort, который сортирует овощи по калориям.
// В классе Salad есть метод mix, который смешивает овощи в салате.
// В index.js создается экземпляр SortByCaloriesStrategy и передается в конструктор Salad для использования стратегии сортировки.

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
