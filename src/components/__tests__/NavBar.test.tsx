import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar/NavBar";

describe("NavBar Component", () => {
    test("renders the NavBar with the correct title", () => {
        const title = "Cars Management";
        render(<NavBar pageTitle={title} />);

        const titleElement = screen.getByText(title);
        expect(titleElement).toBeInTheDocument();
    });

    test("renders an AppBar component", () => {
        render(<NavBar pageTitle="Test Title" />);

        const appBar = screen.getByRole("banner");
        expect(appBar).toBeInTheDocument();
    });
});
