

export class ObjectManipulator<T extends object> {

    constructor(protected obj: T) {}

    public set<K extends string, V>(
        key: K,
        value: V
    ): ObjectManipulator<T & { [P in K]: V }> {
        return new ObjectManipulator({ ...this.obj, [key]: value } as T & { [P in K]: V });
    }

    public get<K extends keyof T>(key: K): T[K] {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
        const { [key]: _, ...newObj } = this.obj;
        return new ObjectManipulator(newObj as Omit<T, K>);
    }

    public getObject(): T {
        return this.obj;
    }
}