/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from ".";

const TestComponent = () => (
  <MemoryRouter>
    <Footer />
  </MemoryRouter>
);

describe("Footer", () => {
  it("should show the component", () => {
    const { getByTestId } = render(<TestComponent />);

    const container = getByTestId("footer-container");

    expect(container).toBeInTheDocument();
  });

  it("should show the attribute link", () => {
    const { getByTestId } = render(<TestComponent />);

    const link = getByTestId("footer-link");
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/paulanader/"
    );
  });
});
