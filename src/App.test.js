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

});
