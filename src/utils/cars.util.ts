import { Car } from "../interfaces/cars";
import { FormErrors } from "../hooks/useForm";

export const getInitialCarValues = () => ({
    make: '',
    model: '',
    package: '',
    color: '',
    year: '',
    category: '',
    mileage: '',
    price: '',
})

export const validateCarForm = (values: Car) => {
    const errors: FormErrors = {};
    if (!values.make) errors.make = 'Make is required';
    if (!values.model) errors.model = 'Model is required';
    if (!values.package) errors.package = 'Package is required';
    if (!values.color) errors.color = 'Color is required';
    if (!values.year) errors.year = 'Year is required';
    if (!values.category) errors.category = 'Category is required';
    if (!values.mileage) errors.mileage = 'Mileage is required';
    if (!values.price) errors.price = 'Price is required';
    return errors;
}
