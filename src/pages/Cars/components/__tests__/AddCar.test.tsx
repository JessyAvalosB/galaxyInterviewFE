import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import AddCar from "../AddCar";

const fillForm = () => {
    fireEvent.change(screen.getByLabelText('Make'), { target: { value: "Nissan" } });
    fireEvent.change(screen.getByLabelText('Model'), { target: { value: "Versa" } });
    fireEvent.change(screen.getByLabelText('Package'), { target: { value: "Advance" } });
    fireEvent.change(screen.getByLabelText('Color'), { target: { value: "Blue" } });
    fireEvent.change(screen.getByLabelText('Year'), { target: { value: "2017" } });
    fireEvent.change(screen.getByLabelText('Category'), { target: { value: "Sedan" } });
    fireEvent.change(screen.getByLabelText('Mileage'), { target: { value: "120000" } });
    fireEvent.change(screen.getByLabelText('Price'), { target: { value: "250000" } });
};

describe("AddCar Component", () => {
    const mockHandleSubmit = jest.fn();

    test("renders the Add Car button", () => {
        render(<AddCar handleSubmit={mockHandleSubmit} />);

        const buttonElement = screen.getByText("Add Car");
        expect(buttonElement).toBeInTheDocument();
    });

    test("opens the modal when clicking 'Add Car' button", () => {
        render(<AddCar handleSubmit={mockHandleSubmit} />);

        const addButton = screen.getByText("Add Car");
        fireEvent.click(addButton);

        const modalTitle = screen.getByText("Add New Car");
        expect(modalTitle).toBeInTheDocument();
    });

    test("closes the modal when clicking 'Cancel' button", () => {
        render(<AddCar handleSubmit={mockHandleSubmit} />);

        fireEvent.click(screen.getByText("Add Car"));
        fireEvent.click(screen.getByText("Cancel"));

        expect(screen.queryByText("Add New Car")).not.toBeInTheDocument();
    });

    test.skip("submits the form when clicking 'Submit' button", async () => {
        render(<AddCar handleSubmit={mockHandleSubmit} />);

        fireEvent.click(screen.getByText("Add Car"));

        fillForm();

        const form = screen.getByTestId("add-car-form");
        fireEvent.submit(form);

        expect(mockHandleSubmit).toHaveBeenCalled();
    });
});
