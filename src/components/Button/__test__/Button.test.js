import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";
import App from "../../../App";

test("button has correct initial color", () => {
  render(<Button />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background:  color to be red;
  expect(colorButton).toHaveStyle({ background: "red" });
});
test("button has correct initial text", () => {
  render(<Button />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // clicked button
  fireEvent.click(colorButton);

  // expect the background: color to be blue;
  expect(colorButton).toHaveStyle({ background: "blue" });

  // expect the button text to be 'Change to blue';
  expect(colorButton.textContent).toBe("Change to red");
});
test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
