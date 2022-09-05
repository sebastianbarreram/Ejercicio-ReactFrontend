import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Login from "./Login";
import { prettyDOM } from "@testing-library/dom/dist/pretty-dom";

test("renders content", () => {
  const component = render(<Login />);

  //   component.getByText("User");
  //   component.getByText("Password");
  //Pass the test if find "User" in te render component
  expect(component.container).toHaveTextContent("User");
});

test("render 2 input components", () => {
  const { getByLabelText } = render(<Login />);
  expect(getByLabelText("User")).toBeInTheDocument();
  expect(getByLabelText("Password")).toBeInTheDocument();
});

test("sign in with a register user", async () => {
  const component = render(<Login />);

  const button = component.getByRole("button");
  // console.log(prettyDOM(button));

  const userInput = component.getByLabelText("User");
  console.log(prettyDOM(userInput));

  fireEvent.change(userInput, {
    target: { value: "sebas" },
  });

  const passwordInput = component.getByLabelText("Password");
  console.log(prettyDOM(passwordInput));

  fireEvent.change(passwordInput, {
    target: { value: "ssssss" },
  });

  fireEvent.click(button);
});

test("sign in with a no register user", () => {
  const component = render(<Login />);

  const button = component.getByRole("button");
  // console.log(prettyDOM(button));

  const userInput = component.getByLabelText("User");
  console.log(prettyDOM(userInput));

  fireEvent.change(userInput, {
    target: { value: "sebas" },
  });

  const passwordInput = component.getByLabelText("Password");
  console.log(prettyDOM(passwordInput));

  fireEvent.change(passwordInput, {
    target: { value: "ssss" },
  });

  fireEvent.click(button);
});
