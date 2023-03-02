/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import VehicleList from ".";
import { mockedVehicles } from "../../mocks/mocks";

const mockedOnDelete = jest.fn();

const TestComponent = () => (
  <MemoryRouter>
    <VehicleList vehicles={mockedVehicles} onDelete={mockedOnDelete} />
  </MemoryRouter>
);

describe("VehicleList", () => {
  it("should show the component and change the page", () => {
    const { getByTestId } = render(<TestComponent />);

    const container = getByTestId("vehicle-list-container");

    const nextPageButton = getByTestId("next-page-button");

    userEvent.click(nextPageButton);
    expect(container).toBeInTheDocument();
  });

  it("should search a modal vehicle and call the onDelete function when clicking on delete button", () => {
    const { getByTestId, getAllByTestId } = render(<TestComponent />);
    const searchInput = getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "test" } });

    const deleteButton = getAllByTestId("pill-button-orange")[0];

    userEvent.click(deleteButton);

    expect(mockedOnDelete).toHaveBeenCalled();
  });
});
