/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import TablePagination from ".";

const mockedHandlePageChange = jest.fn();

const TestComponent = () => (
  <MemoryRouter>
    <TablePagination
      currentPage={2}
      totalPages={3}
      handlePageChange={mockedHandlePageChange}
    />
  </MemoryRouter>
);

describe("TablePagination", () => {
  it("should show the component", () => {
    const { getByTestId } = render(<TestComponent />);

    const container = getByTestId("table-pagination-container");

    expect(container).toBeInTheDocument();
  });

  it("should show call the handlePageChange when clicking on next page button", () => {
    const { getByTestId } = render(<TestComponent />);

    const nextPageButton = getByTestId("next-page-button");

    userEvent.click(nextPageButton);
    expect(mockedHandlePageChange).toHaveBeenCalled();
  });

  it("should show call the handlePageChange when clicking on previous page button", () => {
    const { getByTestId } = render(<TestComponent />);

    const previousPageButton = getByTestId("previous-page-button");

    userEvent.click(previousPageButton);
    expect(mockedHandlePageChange).toHaveBeenCalled();
  });

  it("should show call the handlePageChange when clicking on page button", () => {
    const { getAllByTestId } = render(<TestComponent />);

    const pageButtons = getAllByTestId("button-page-change")[0];

    userEvent.click(pageButtons);
    expect(mockedHandlePageChange).toHaveBeenCalled();
  });
});
