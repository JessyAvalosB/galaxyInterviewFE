import "@testing-library/jest-dom";
import { GridColDef } from "@mui/x-data-grid";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import DataTable, { DataTableProps } from "../DataTable/DataTable";

// Datos de prueba
interface TestRow {
    id: number;
    name: string;
}

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
];

const rows: TestRow[] = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
];

const defaultProps: DataTableProps<TestRow> = {
    columns,
    rows,
    pageSizeOptions: [5, 10],
    isLoading: false,
    checkboxSelection: false,
};

describe("DataTable Component", () => {
    test("renders the table with provided data", () => {
        render(<DataTable {...defaultProps} />);

        expect(screen.getByRole("grid")).toBeInTheDocument();
        expect(screen.getByText("ID")).toBeInTheDocument();
        expect(screen.getByText("Name")).toBeInTheDocument();
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    });

    test("shows loading indicator when isLoading is true", () => {
        render(<DataTable {...defaultProps} isLoading={true} />);

        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    test("renders checkbox selection when enabled", () => {
        render(<DataTable {...defaultProps} checkboxSelection={true} />);

        expect(screen.getAllByRole("checkbox").length).toBeGreaterThan(0);
    });
});
