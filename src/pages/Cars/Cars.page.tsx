import { useEffect } from 'react';
import { Container, Stack } from '@mui/material';
import { useFetch, } from '@developer-bug/custom-hooks';

import { AddCar } from './components';
import { Car } from '../../interfaces/cars';
import { getTableColumns } from '../../utils/table';
import { DataTable, NavBar } from '../../components';
import { CAR_COLUMNS } from '../../constants/cars.constants';

const Cars = () => {
    const {
        data,
        loading,
        get,
        post,
    } = useFetch<Car[], Car>('http://localhost:4000/cars');

    useEffect(() => {
        get();
    }, []);

    const columns = getTableColumns(CAR_COLUMNS);

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
                    rows={data || []}
                    pageSizeOptions={[5, 10, 15]}
                    isLoading={loading} />
            </Container>
        </>
    )
}

export default Cars
