/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import PillButton from ".";

const mockedHandleClick = jest.fn();
const mockedRoute = "/test";

describe("BreadCrumb", () => {
  it("should show the component when has route", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <PillButton
          label="test"
          handleClick={mockedHandleClick}
          type="submit"
          color="orange"
          route={mockedRoute}
        />
      </MemoryRouter>
    );

    const button = getByTestId("pill-link-button-orange");

    expect(button).toHaveAttribute("href", mockedRoute);
  });

  it("should show the component when the route doesn't exist", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <PillButton
          label="test"
          handleClick={mockedHandleClick}
          type="button"
          color="blue"
        />
      </MemoryRouter>
    );

    const button = getByTestId("pill-button-blue");

    expect(button).toBeInTheDocument();
  });

  it("should call the handleClick function when clicking on button", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <PillButton
          label="test"
          handleClick={mockedHandleClick}
          color="orange"
        />
      </MemoryRouter>
    );

    const button = getByTestId("pill-button-orange");

    userEvent.click(button);

    expect(mockedHandleClick).toHaveBeenCalled();
  });
});
