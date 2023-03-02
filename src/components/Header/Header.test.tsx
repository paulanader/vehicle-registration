/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from ".";

const TestComponent = ({ hasButton }: { hasButton?: boolean }) => (
  <MemoryRouter>
    <Header route="/test" label="test" hasButton={hasButton} />
  </MemoryRouter>
);

describe("BreadCrumb", () => {
  it("should show the component", () => {
    const { getByTestId } = render(<TestComponent hasButton />);

    const container = getByTestId("header-container");

    expect(container).toBeInTheDocument();
  });

  it("should not show the pill button when hasButton is false", () => {
    const { queryByTestId } = render(<TestComponent />);

    const container = queryByTestId("pill-link-button-blue");

    expect(container).not.toBeInTheDocument();
  });

  it("should  show the pill button when hasButton is true", () => {
    const { getByTestId } = render(<TestComponent hasButton />);

    const container = getByTestId("pill-link-button-blue");

    expect(container).toBeInTheDocument();
  });
});
