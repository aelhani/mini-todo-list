import React from "react";
import App from "./App";
import { render, cleanup, fireEvent } from "@testing-library/react";
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

  it("should delete a todo from the list", () => {
    const { getByText, queryByText, getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText("New todo");
    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.click(getByText("Add todo"));
    getByText(/Test todo/i);
    fireEvent.click(getByText("done"));
    expect(queryByText(/Test todo/i)).toBeNull();
    // const count = getAllByText(/Test todo/i).length;
    // fireEvent.click(getByText("done"));
    // const newCount = getAllByText("Test todo").length;
    // console.log(count, newCount, count === 1 && newCount === 0);
    // expect(count === 1 && newCount === 0).toBe(true);
  });

  it("should check a todo as finished", () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText("New todo");
    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.click(getByText("Add todo"));
    getByText(/Test todo/i);
    fireEvent.click(getByText("check"));
    expect(getByTestId("todo-0")).toHaveStyle("text-decoration: line-through");
    expect(getByTestId("todo-0")).toHaveAttribute("aria-checked", "true");
  });

  it("should unmout from DOM", () => {
    const { getByText, unmount, queryByText } = render(<App />);
    getByText("Todo List:");
    unmount();
    expect(queryByText("Todo List:")).toBeNull();
  });

});
