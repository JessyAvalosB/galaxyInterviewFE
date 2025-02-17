import { useState } from 'react';
import {
    TextField,
    Box,
    Button,
} from '@mui/material';

import { useForm } from '../../../hooks';
import { Car } from '../../../interfaces/cars';
import { SimpleModal } from '../../../components';
import { getCapitalize } from '../../../utils/texts';
import { getInitialCarValues, validateCarForm } from '../../../utils/cars.util';

interface AddCarProps {
    handleSubmit: (data: Car) => void;
}

const AddCar = ({ handleSubmit: sendData }: AddCarProps) => {
    const [open, setOpen] = useState(false);
    const {
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
    } = useForm({
        initialValues: getInitialCarValues(),
        validate: validateCarForm,
        onSubmit: (values) => {
            sendData(values);
        }
    })

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        resetForm();
        setOpen(false);
    }

    const fields = [
        'make',
        'model',
        'package',
        'color',
        'year',
        'category',
        'mileage',
        'price',
    ]

    return (
        <>
            <Button variant='contained' onClick={handleOpen}>
                Add Car
            </Button>
            <SimpleModal isOpen={open} header='Add New Car'>
                <form>
                    {fields.map((field) => (
                        <TextField
                            fullWidth
                            key={`${field}-field`}
                            label={getCapitalize(field)}
                            type="text"
                            name={field}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!errors[field]}
                            helperText={errors[field]}
                            sx={{ marginBottom: '1rem' }}
                        />
                    ))}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                        <Button onClick={handleClose} disabled={isSubmitting} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit} disabled={isSubmitting} variant="contained" color="primary">
                            Submit
                        </Button>
                    </Box>
                </form>
            </SimpleModal>
        </>
    )
}

export default AddCar;
