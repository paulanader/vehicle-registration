/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import VehicleEditForm from ".";
import { mockedVehicles } from "../../mocks/mocks";

const mockedOnSubmit = jest.fn();
const mockedEditVehicle = mockedVehicles[0];
const mockedNavigateTo = jest.fn();

const TestComponent = () => (
  <MemoryRouter>
    <VehicleEditForm vehicle={mockedEditVehicle} onSubmit={mockedOnSubmit} />
  </MemoryRouter>
);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigateTo,
}));

describe("VehicleEditForm", () => {
  beforeEach(cleanup);

  it("should show the component", () => {
    const { getByTestId } = render(<TestComponent />);

    const container = getByTestId("vehicle-edit-form-container");

    expect(container).toBeInTheDocument();
  });
});
