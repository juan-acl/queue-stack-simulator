import { Table } from "components/table";
import React from "react";
import { columns } from "src/columns"
import { Queue as QueueClass } from "./queueClass";

export const Queue: React.FC = () => {

    const queue = new QueueClass();

    const enqueue = <T,>(data: T) => {
        queue.enqueue(data)
    }

    const dequeue = () => {
        queue.dequeue;
    }

    const sizeQueue = () => {
        queue.size
    }

    return (
        <div>
            <p>Queue</p>
            <Table
                columns={columns}
                data={queue.data}
                dequeue={dequeue}
                enqueue={enqueue}
            />
        </div>
    );
}