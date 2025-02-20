import { useEffect } from 'react';
import { Container, Stack } from '@mui/material';

import { AddCar } from './components';
import { useFetch } from '../../hooks';
import { Car } from '../../interfaces/cars';
import { getTableColumns } from '../../utils/table';
import { DataTable, NavBar } from '../../components';
import { getCarsColumns } from '../../constants/cars.constants';

const Cars = () => {
    const {
        data,
        loading,
        get,
        post,
        delete: deleteCar
    } = useFetch<Car[], Car>('http://localhost:4000/cars');

    useEffect(() => {
        get();
    }, []);

    const handleSubmit = async (newCar: Car) => {
        await post(newCar);
        get();
    }

    const handleDelete = async (id: string) => {
        await deleteCar(id);
        get();
    }

    const columns = getTableColumns(getCarsColumns(handleDelete));

    return (
        <>
            <NavBar pageTitle='Cars Management' />
            <Container sx={{ marginTop: '2rem' }}>
                <Stack direction='row' justifyContent='flex-end' sx={{ marginBottom: '1rem' }}>
                    <AddCar handleSubmit={handleSubmit} />
                </Stack>
                <DataTable
                    columns={columns}
                    rows={data || []}
                    pageSizeOptions={[5, 10, 15]}
                    isLoading={loading} />
            </Container>
        </>
    )
}

export default Cars
