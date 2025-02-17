import { Paper } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export interface DataTableProps<T> {
    columns: GridColDef[];
    rows: T[];
    pageSizeOptions?: number[];
    isLoading?: boolean;
}

const DataTable = <T,>({ columns, rows, pageSizeOptions = [5, 10], isLoading = false }: DataTableProps<T>) => {
    const paginationModel = { page: 0, pageSize: 5 };
    return (
        <Paper sx={{ height: 400, width: '100%', margin: '0 auto' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={pageSizeOptions}
                checkboxSelection
                loading={isLoading}
                sx={{ border: 0 }}
            />
        </Paper>
    )
}

export default DataTable
