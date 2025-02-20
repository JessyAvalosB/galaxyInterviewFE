import { ReactNode } from "react";

export interface ColumnConfig {
    name: string;
    width: number;
    type?: 'number' | 'string' | 'boolean' | 'date' | 'dateTime' | 'actions';
    renderCell?: (params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => ReactNode;
    sortable?: boolean;
    getActions?: (params: GridRenderCellParams<any>) => ReactNode[];
}
