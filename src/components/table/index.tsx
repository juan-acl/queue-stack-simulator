import DataTable from "react-data-table-component";

interface TableProps {
    columns: any;
    data: any;
}

export const Table = ({ columns, data, }: TableProps) => {
    return (
        <DataTable
            columns={columns}
            data={data}
            noDataComponent={"No hay datos"}
        />
    )
}