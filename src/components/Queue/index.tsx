import { Table } from "components/table";
import React, { useState } from "react";
import { columns } from "src/columns"
import { Queue as QueueClass } from "./queueClass";
import { ModalQueue } from "./modal";

export const Queue: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    let mapColumns = columns.map((column) => {
        if (column.name === "Acciones") {
            return {
                ...column,
                cell: (row: any) => {
                    return (
                        <div>
                            <button onClick={() => dequeue()}>Atender</button>
                        </div>
                    )
                }
            }
        } else {
            return column;
        }
    })

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

    const openModalQueue = () => {
        setOpenModal(true);
    }

    return (
        <>
            <div>
                <p>Queue</p>
                <button onClick={openModalQueue} >
                    Launch demo modal
                </button>
                <Table
                    columns={mapColumns}
                    data={queue.data}
                />
            </div>
            <ModalQueue openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
}