export class Queue<T> {
    public _data: T[] = [];

    enqueue(data: T) {
        this._data.push(data);
    }

    dequeue(): T | null {
        if (this._data.length === 0) return null;
        return this._data.shift() || null;
    }

    peek(): T | null {
        return this._data.length > 0 ? this._data[0] : null;
    }

    size(): number {
        return this._data.length;
    }

    isEmpty(): boolean {
        return this._data.length === 0;
    }

    clear() {
        this._data = [];
    }

    getAllData() {
        return this._data;
    }
}