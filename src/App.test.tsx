import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders starter page", () => {
  render(<App />);
  const header = screen.getByText(/Hello World!/i);
  expect(header).toBeInTheDocument();
});
