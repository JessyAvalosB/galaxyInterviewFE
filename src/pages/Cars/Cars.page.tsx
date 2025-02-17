import { useEffect } from 'react';
import { Container, Stack } from '@mui/material';
import { useFetch, } from '@developer-bug/custom-hooks';

import { AddCar } from './components';
import { Car } from '../../interfaces/cars';
import { getTableColumns } from '../../utils/table';
import { DataTable, NavBar } from '../../components';
import { ColumnConfig } from '../../interfaces/table';

const Cars = () => {
    const {
        data,
        error,
        loading,
        get,
        post,
    } = useFetch<Car[], Car>('http://localhost:4000/cars');

    useEffect(() => {
        get();
    }, []);

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

    const handleSubmit = async (newCar: Car) => {
        await post(newCar);
        get();
    }

    return (
        <>
            <NavBar pageTitle='Cars Management' />
            <Container sx={{ marginTop: '2rem' }}>
                <Stack direction='row' justifyContent='flex-end' sx={{ marginBottom: '1rem' }}>
                    <AddCar handleSubmit={handleSubmit} />
                </Stack>
                <DataTable
                    columns={columns}
                    rows={data || []} />
            </Container>
        </>
    )
}

export default Cars
