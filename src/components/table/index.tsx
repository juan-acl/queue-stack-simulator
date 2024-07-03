import DataTable from "react-data-table-component";

interface TableProps {
    columns: any;
    data: any;
    enqueue: (data: any) => void;
    dequeue: () => void;

}

export const Table = ({ columns, data, enqueue, dequeue }: TableProps) => {
    return (
        <DataTable
            columns={columns}
            data={data}
            noDataComponent={"No hay datos"}
        />
    )
}