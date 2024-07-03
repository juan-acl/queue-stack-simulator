export class Queue<T> {
    private _data: T[] = [];

    enqueue(data: T) {
        this._data.unshift(data);
    }

    dequeue() {
        if (this._data.length === 0) return null
        return this._data.shift();
    }

    peek() {
        return this._data[0];
    }

    data() {
        return this._data;
    }

    size() {
        return this._data.length;
    }

    isEmpty() {
        return this._data.length === 0;
    }

    clear() {
        this._data = [];
    }

}