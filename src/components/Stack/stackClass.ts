export class StackClass<T> {
    public _data: T[] = [];

    push(data: T) {
        this._data.push(data);
    }

    pop(): T | undefined {
        return this._data.pop();
    }

    getAllData(): T[] {
        return this._data;
    }
}