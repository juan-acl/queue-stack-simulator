import React, { useState } from "react";
import { Table } from "components/table";
import { columns, RowData } from "src/columns";
import { StackClass } from "./stackClass";
import { ModalStack } from "./modal";

export const Stack: React.FC = () => {
    const [stack, _] = useState<StackClass<RowData>>(new StackClass());
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [data, setData] = useState<RowData[]>(stack.getAllData());

    const unShiftStack = (rowData: RowData) => {
        stack.push(rowData);
        setData([...stack._data]);
    };

    const popStack = () => {
        stack.pop();
        setData([...stack.getAllData()]);
    };

    const openModalQueue = () => {
        setOpenModal(true);
    };

    return (
        <>
            <div className="container-queue" >
                <p>Stack</p>
                <button onClick={openModalQueue}>Agregar nuevo cliente</button>
                <button onClick={popStack}>Atender</button>
            </div>
            <div className="container-table" >
                <Table columns={columns} data={data} />
            </div>
            <ModalStack unShiftStack={unShiftStack} openModal={openModal} setOpenModal={setOpenModal} />
        </>
    )
}