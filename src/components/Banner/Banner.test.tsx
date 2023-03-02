/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Banner from ".";

const TestComponent = () => (
  <MemoryRouter>
    <Banner label={"Cadastrar"} />
  </MemoryRouter>
);

describe("Banner", () => {
  it("should show the component", () => {
    const { getByTestId, getByText } = render(<TestComponent />);

    const container = getByTestId("banner-container");
    const label = getByText("Faça o cadastro do veículo");

    expect(container).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it("should show the link banner", () => {
    const { getByTestId } = render(<TestComponent />);

    const link = getByTestId("pill-link-button-blue");

    expect(link).toHaveAttribute("href", "/vehicles/add");
  });
});
