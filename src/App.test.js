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
});
