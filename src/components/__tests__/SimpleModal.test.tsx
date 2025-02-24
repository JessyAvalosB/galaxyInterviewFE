import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import SimpleModal from "../SimpleModal/SimpleModal";

describe("SimpleModal Component", () => {
    test("renders the modal with the provided header", () => {
        render(
            <SimpleModal header="Test Modal" isOpen={true}>
                <p>Modal Content</p>
            </SimpleModal>
        );

        const headerElement = screen.getByText("Test Modal");
        expect(headerElement).toBeInTheDocument();
    });

    test("renders the children inside the modal", () => {
        render(
            <SimpleModal header="Test Modal" isOpen={true}>
                <p>Modal Content</p>
            </SimpleModal>
        );

        const childElement = screen.getByText("Modal Content");
        expect(childElement).toBeInTheDocument();
    });

    test("does not render the modal when isOpen is false", () => {
        render(
            <SimpleModal header="Hidden Modal" isOpen={false}>
                <p>Should not be visible</p>
            </SimpleModal>
        );

        const modalContent = screen.queryByText("Should not be visible");
        expect(modalContent).not.toBeInTheDocument();
    });
});
