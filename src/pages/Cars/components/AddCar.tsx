import { useState } from 'react';
import {
    TextField,
    Box,
    Button,
} from '@mui/material';

import { useForm } from '../../../hooks';
import { SimpleModal } from '../../../components';
import { getCapitalize } from '../../../utils/texts';
import { AddCarProps } from '../../../interfaces/cars';
import { NEW_CAR_FIELDS } from '../../../constants/cars.constants';
import { getInitialCarValues, validateCarForm } from '../../../utils/cars.util';

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
        onSubmit: async (values) => {
            await sendData(values);
            handleClose();
        }
    })

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        resetForm();
        setOpen(false);
    }

    return (
        <>
            <Button variant='contained' onClick={handleOpen}>
                Add Car
            </Button>
            <SimpleModal isOpen={open} header='Add New Car'>
                <form>
                    {NEW_CAR_FIELDS.map((field) => (
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
