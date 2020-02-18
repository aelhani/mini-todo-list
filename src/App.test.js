import React from "react";
import App from "./App";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("todo list", () => {
  it("should mount to DOM", () => {
    const { getByText } = render(<App />);
    getByText("Todo List:");
  });
  
  it("should add a new todo", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText("New todo");
    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.click(getByText("Add todo"));
    getByText(/Test todo/i);
  });

});
