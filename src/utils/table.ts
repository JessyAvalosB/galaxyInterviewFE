import { GridColDef } from "@mui/x-data-grid";

import { getCapitalize } from "./texts";
import { ColumnConfig } from "../interfaces/table";

export const getTableColumns = (columnsNames: ColumnConfig[]): GridColDef[] => {
    return columnsNames.map(({ name, ...rest }: ColumnConfig) => ({
        field: name,
        headerName: getCapitalize(name),
        ...rest,
    } as GridColDef));
}
