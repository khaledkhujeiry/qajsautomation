const Vegetable = require("./Vegetable");

class Tomato extends Vegetable {
    constructor(name, calories) {
        super(name, calories);
    }

    getInfo() {
        return `${super.getInfo()}, Цвет: красный`;
    }
}

module.exports = Tomato;
