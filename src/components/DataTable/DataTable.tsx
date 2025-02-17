import { Paper } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export interface DataTableProps {
    columns: GridColDef[];
    rows: any[];
}

const DataTable = ({ columns, rows }: DataTableProps) => {
    const paginationModel = { page: 0, pageSize: 5 };
    return (
        <Paper sx={{ height: 400, width: '100%', margin: '0 auto' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    )
}

export default DataTable
