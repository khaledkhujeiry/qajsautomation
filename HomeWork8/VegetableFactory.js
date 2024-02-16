// Фабричный метод (Factory Method):
// Класс VegetableFactory представляет фабрику овощей, у которой есть метод createVegetable, создающий объекты овощей.
// В файле main.js используется фабрика овощей для создания конкретных овощей с помощью метода createVegetable.

const Carrot = require("./Carrot");
const Tomato = require("./Tomato");
const Pepper = require("./Pepper");
const Cucumber = require("./Cucumber");

// Фабрика для создания овощей
class VegetableFactory {
    createVegetable(type, name, calories) {
        switch (type) {
            case "carrot":
                return new Carrot(name, calories);
            case "tomato":
                return new Tomato(name, calories);
            case "pepper":
                return new Pepper(name, calories);
            case "cucumber":
                return new Cucumber(name, calories);
            default:
                throw new Error(`Неизвестный овощ: ${type}`);
        }
    }
}

module.exports = VegetableFactory;
