import React, { useState } from "react";
import { Table } from "components/table";
import { columns, RowData } from "src/columns";
import { Queue as QueueClass } from "./queueClass";
import { ModalQueue } from "./modal";
import "./queueStyle.scss";

export const QueueComponent: React.FC = () => {
    const [queue, _] = useState<QueueClass<RowData>>(new QueueClass());
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [data, setData] = useState<RowData[]>(queue.getAllData());

    const enqueue = (rowData: RowData) => {
        queue.enqueue(rowData);
        setData([...queue._data]);
    };

    const dequeue = () => {
        queue.dequeue();
        setData([...queue.getAllData()]);
    };

    const openModalQueue = () => {
        setOpenModal(true);
    };

    return (
        <>
            <div className="container-queue" >
                <p>Queue</p>
                <button onClick={openModalQueue}>Agregar nuevo cliente</button>
                <button onClick={dequeue}>Atender</button>
            </div>
            <div className="container-table" >
                <Table columns={columns} data={data} />
            </div>
            <ModalQueue enqueue={enqueue} openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
};
