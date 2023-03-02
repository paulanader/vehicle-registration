/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Search from ".";

const mockedHandleSearchChange = jest.fn();

const TestComponent = () => (
  <MemoryRouter>
    <Search searchValue="test" handleSearchChange={mockedHandleSearchChange} />
  </MemoryRouter>
);

describe("BreadCrumb", () => {
  it("should show the component", () => {
    const { getByTestId } = render(<TestComponent />);

    const container = getByTestId("search-input");

    expect(container).toBeInTheDocument();
  });

  it("should call the handleSearchChange function when changing the input value", () => {
    const { getByTestId } = render(<TestComponent />);

    const searchInput = getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "change test" } });

    expect(mockedHandleSearchChange).toHaveBeenCalled();
  });
});
