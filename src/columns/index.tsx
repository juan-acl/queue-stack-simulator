
export interface RowData {
    id: string;
    name: string;
    lastname: string;
    date: string;
    status: string;
    actions: any;
}

export const columns = [
    {
        name: 'Id',
        selector: (row: RowData) => row.id,
    },
    {
        name: 'Nombre',
        selector: (row: RowData) => row.name,
    },
    {
        name: 'Apellido',
        selector: (row: RowData) => row.lastname,
    },
    {
        name: 'Fecha',
        selector: (row: RowData) => row.date,
    },
    {
        name: 'Estado',
        selector: (row: RowData) => row.status,
    },
    {
        name: 'Acciones',
        selector: (row: RowData) => row.actions,
    },
]