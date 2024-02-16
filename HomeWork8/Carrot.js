const Vegetable = require("./Vegetable");

class Carrot extends Vegetable {
    constructor(name, calories) {
        super(name, calories);
    }

    getInfo() {
        return `${super.getInfo()}, Цвет: оранжевый`;
    }
}

module.exports = Carrot;
