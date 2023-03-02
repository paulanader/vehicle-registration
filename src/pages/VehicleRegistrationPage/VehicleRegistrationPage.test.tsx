/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import VehicleRegistrationPage from ".";
import { mockedVehicles } from "../../mocks/mocks";

jest.mock("../../hooks/VehicleProvider", () => ({
  useVehicle: () => ({
    vehicles: mockedVehicles,
  }),
}));

const TestComponent = () => (
  <MemoryRouter>
    <VehicleRegistrationPage />
  </MemoryRouter>
);

describe("VehicleRegistrationPage", () => {
  it("should show the component", () => {
    const { getByTestId } = render(<TestComponent />);

    const container = getByTestId("wrapper-container");

    expect(container).toBeInTheDocument();
  });

  it("should show the header component", () => {
    const { getByTestId } = render(<TestComponent />);

    const header = getByTestId("header-container");

    expect(header).toBeInTheDocument();
  });

  it("should show the breadcrumb component", () => {
    const { getByTestId } = render(<TestComponent />);

    const breadcrumb = getByTestId("breadcrumb-container");

    expect(breadcrumb).toBeInTheDocument();
  });

  it("should show the VehicleListForm component", () => {
    const { getByTestId } = render(<TestComponent />);

    const vehicleListForm = getByTestId("vehicle-list-form-container");

    expect(vehicleListForm).toBeInTheDocument();
  });

  it("should show the Footer component", () => {
    const { getByTestId } = render(<TestComponent />);

    const footer = getByTestId("footer-container");

    expect(footer).toBeInTheDocument();
  });
});
