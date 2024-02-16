// Базовый класс овощей
class Vegetable {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }

    getInfo() {
        return `Овощ: ${this.name}, Калории: ${this.calories}`;
    }
}

module.exports = Vegetable;
