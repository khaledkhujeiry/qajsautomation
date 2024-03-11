export {};

import { addition } from "./addition.test.js";
import { multiplication } from "./multiplication.test.js";
import { subtraction } from "./subtraction.test.js";
import { division } from "./division.test.js";
import { exponentiation } from "./exponentiation.test.js";
import { additional } from "./additional.test.js";
import { returnType } from "./return-type.test.js";
import { performance } from "./performance.test.js";

describe("Калькулятор", () => {
    addition();
    multiplication();
    subtraction();
    division();
    exponentiation();
    additional();
    returnType();
    performance();
});
