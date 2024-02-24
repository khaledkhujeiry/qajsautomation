// Функция map принимает два обобщенных типа T и U для входных данных и возвращаемых значений
export function map<T, U>(mapper: (value: T, index: number, array: T[]) => U, input: T[]): U[];
export function map<T, U>(mapper: (value: T, index: number, array: T[]) => U): (input: T[]) => U[];
export function map(mapper: Function, input?: any): any {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: any) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}

// Функция filter принимает обобщенный тип T для элементов массива
export function filter<T>(filterer: (value: T, index: number, array: T[]) => boolean, input: T[]): T[];
// Перегруженная сигнатура функции filter для случая, когда передается только функция фильтра
export function filter<T>(filterer: (value: T, index: number, array: T[]) => boolean): (input: T[]) => T[];
export function filter(filterer: Function, input?: any): any {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: any) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}

// Функция add принимает числовые аргументы a и b
export function add(a: number, b: number): number;
// Перегруженная сигнатура функции add для случая, когда передается только первый аргумент
export function add(a: number): (b: number) => number;
export function add(a: number, b?: number): any {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}
