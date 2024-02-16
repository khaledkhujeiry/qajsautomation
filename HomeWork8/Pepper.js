const Vegetable = require("./Vegetable");

class Pepper extends Vegetable {
    constructor(name, calories) {
        super(name, calories);
    }

    getInfo() {
        return `${super.getInfo()}, Острота: средняя`;
    }
}

module.exports = Pepper;
