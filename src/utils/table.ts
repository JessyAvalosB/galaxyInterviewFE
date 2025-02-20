
import DeleteIcon from '@mui/icons-material/Delete';
import {
    GridActionsCellItem,
    GridColDef,
    GridRenderCellParams
} from "@mui/x-data-grid";

import { getCapitalize } from "./texts";
import { ColumnConfig } from "../interfaces/table";

export const getTableColumns = (columnsNames: ColumnConfig[]): GridColDef[] => columnsNames.map(({ name, ...rest }: ColumnConfig) => ({
    field: name,
    headerName: getCapitalize(name),
    ...rest,
}));
