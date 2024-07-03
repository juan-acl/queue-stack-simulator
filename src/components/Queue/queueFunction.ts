interface Queue<T> {
    enqueue: (data: T) => void;
    dequeue: () => T | undefined;
    peek: () => T;
    size: () => number;
}

export const Queue = () => {

}