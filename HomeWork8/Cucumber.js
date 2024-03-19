const Vegetable = require("./Vegetable");

class Cucumber extends Vegetable {
    constructor(name, calories) {
        super(name, calories);
    }

    getInfo() {
        return `${super.getInfo()}, Форма: цилиндрическая`;
    }
}

module.exports = Cucumber;
