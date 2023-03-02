/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import VehicleEditPage from ".";
import { mockedVehicles } from "../../mocks/mocks";

jest.mock("../../hooks/VehicleProvider", () => ({
  useVehicle: () => ({
    vehicles: mockedVehicles,
  }),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: mockedVehicles[0].plate,
  }),
}));

const TestComponent = () => (
  <MemoryRouter>
    <VehicleEditPage />
  </MemoryRouter>
);

describe("VehicleEditPage", () => {
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

  it("should show the VehicleEditForm component", () => {
    const { getByTestId } = render(<TestComponent />);

    const vehicleEditForm = getByTestId("vehicle-edit-form-container");

    expect(vehicleEditForm).toBeInTheDocument();
  });

  it("should show the Footer component", () => {
    const { getByTestId } = render(<TestComponent />);

    const footer = getByTestId("footer-container");

    expect(footer).toBeInTheDocument();
  });
});
