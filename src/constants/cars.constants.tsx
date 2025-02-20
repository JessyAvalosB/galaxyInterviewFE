import DeleteIcon from "@mui/icons-material/Delete";
import { GridRowParams, GridActionsCellItem } from "@mui/x-data-grid";

import { Car } from "../interfaces/cars";
import { ColumnConfig } from "../interfaces/table";

export const getCarsColumns = (handleDelete: (id: string) => void): ColumnConfig[] => {
    return [
        { name: 'id', width: 100, type: 'string' },
        { name: 'make', width: 150, type: 'string' },
        { name: 'model', width: 150, type: 'string' },
        { name: 'package', width: 150, type: 'string' },
        { name: 'color', width: 150, type: 'string' },
        { name: 'year', width: 150, type: 'number' },
        { name: 'category', width: 150, type: 'string' },
        { name: 'mileage', width: 150, type: 'number' },
        { name: 'price', width: 150, type: 'number' },
        {
            name: 'actions',
            width: 100,
            type: 'actions',
            getActions: (params: GridRowParams<Car>) => [
                <GridActionsCellItem
                    key="delete"
                    icon={< DeleteIcon />}
                    label="Delete"
                    onClick={() => handleDelete(params.id.toString())}
                />,
            ]
        },
    ];
}

export const NEW_CAR_FIELDS: string[] = [
    'make',
    'model',
    'package',
    'color',
    'year',
    'category',
    'mileage',
    'price',
]
