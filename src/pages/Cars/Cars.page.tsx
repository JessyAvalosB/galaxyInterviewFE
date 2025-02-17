import { Container, Typography } from '@mui/material';

import { getTableColumns } from '../../utils/table';
import { DataTable, NavBar } from '../../components';
import { ColumnConfig } from '../../interfaces/table';

const Cars = () => {
    const carsColumns: ColumnConfig[] = [
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

    const columns = getTableColumns(carsColumns);

    return (
        <>
            <NavBar pageTitle='Cars Management' />
            <Container>
                <Typography variant='h3' component='div'>
                    Cars
                </Typography>
                <DataTable
                    columns={columns}
                    rows={[]} />

            </Container>
        </>
    )
}

export default Cars
