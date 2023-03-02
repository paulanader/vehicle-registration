/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BreadCrumb from ".";

const mockedItems = [
  {
    route: "/test",
    label: "test",
  },
];

const TestComponent = () => (
  <MemoryRouter>
    <BreadCrumb title="Test" route="/" items={mockedItems} />
  </MemoryRouter>
);

describe("BreadCrumb", () => {
  it("should show the component", () => {
    const { getByTestId, getByText } = render(<TestComponent />);

    const container = getByTestId("breadcrumb-container");
    const title = getByText("Test");

    expect(container).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it("should show the arrow back attribute", () => {
    const { getByTestId } = render(<TestComponent />);

    const link = getByTestId("arrow-back-icon");
    expect(link).toHaveAttribute("href", "/");
  });

  it("should show the first item link", () => {
    const { getByTestId } = render(<TestComponent />);

    const firstLink = getByTestId("first-item-link");
    expect(firstLink).toHaveAttribute("href", "/");
  });

  it("should show the items link", () => {
    const { getByTestId } = render(<TestComponent />);

    const link = getByTestId(`item-link-${mockedItems[0].label}`);

    expect(link).toHaveAttribute("href", mockedItems[0].route);
  });
});
