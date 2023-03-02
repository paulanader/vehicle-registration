/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Wrapper } from ".";

const TestComponent = () => (
  <MemoryRouter>
    <Wrapper children={<div />} />
  </MemoryRouter>
);

describe("Wrapper", () => {
  it("should show the component", () => {
    const { getByTestId } = render(<TestComponent />);

    const container = getByTestId("wrapper-container");

    expect(container).toBeInTheDocument();
  });
});
