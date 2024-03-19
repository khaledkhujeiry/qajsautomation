// Функция map принимает два обобщенных типа T и U для входных данных и возвращаемых значений
export function map<T, U>(mapper: (value: T, index: number, array: T[]) => U, input: T[]): U[];
export function map<T, U>(mapper: (value: T, index: number, array: T[]) => U): (input: T[]) => U[];
export function map<T, U>(
    mapper?: (value: T, index: number, array: T[]) => U,
    input?: T[]
): ((input: T[]) => U[]) | U[] | ((mapper: (value: T, index: number, array: T[]) => U) => (input: T[]) => U[]) {
    if (mapper && input) {
        return input.map(mapper);
    } else if (mapper) {
        return (subInput: T[]) => subInput.map(mapper);
    }
    return map;
}

// Функция filter принимает обобщенный тип T для элементов массива
export function filter<T>(filterer: (value: T, index: number, array: T[]) => boolean, input: T[]): T[];
// Перегруженная сигнатура функции filter для случая, когда передается только функция фильтра
export function filter<T>(filterer: (value: T, index: number, array: T[]) => boolean): (input: T[]) => T[];
export function filter<T>(
    filterer?: (value: T, index: number, array: T[]) => boolean,
    input?: T[]
): ((input: T[]) => T[]) | T[] | ((filterer: (value: T, index: number, array: T[]) => boolean) => (input: T[]) => T[]) {
    if (filterer && input) {
        return input.filter(filterer);
    } else if (filterer) {
        return (subInput: T[]) => subInput.filter(filterer);
    }
    return filter;
}

// Функция add принимает числовые аргументы a и b
export function add(a: number, b: number): number;
// Перегруженная сигнатура функции add для случая, когда передается только первый аргумент
export function add(a: number): (b: number) => number;
export function add(a?: number, b?: number): ((b: number) => number) | number {
    if (a !== undefined && b !== undefined) {
        return a + b;
    } else if (a !== undefined) {
        return function (subB: number) {
            return a + subB;
        };
    }
    throw new Error("Invalid arguments");
}
