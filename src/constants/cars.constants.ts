import { ColumnConfig } from "../interfaces/table";

export const CAR_COLUMNS: ColumnConfig[] = [
    { name: 'id', width: 100, type: 'string' },
    { name: 'make', width: 150, type: 'string' },
    { name: 'model', width: 150, type: 'string' },
    { name: 'package', width: 150, type: 'string' },
    { name: 'color', width: 150, type: 'string' },
    { name: 'year', width: 150, type: 'number' },
    { name: 'category', width: 150, type: 'string' },
    { name: 'mileage', width: 150, type: 'number' },
    { name: 'price', width: 150, type: 'number' }
];

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
