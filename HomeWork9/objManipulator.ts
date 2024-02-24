export class ObjectManipulator<T> {
    constructor(protected obj: T) {}

    public set<K extends keyof T, V>(key: K, value: V): ObjectManipulator<T> {
        return new ObjectManipulator<T>({ ...this.obj, [key]: value });
    }

    public get<K extends keyof T>(key: K): T[K] {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<T> {
        const newObj = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator<T>(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}
