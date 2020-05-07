import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("This test ensures jest is working", () => {
  it("Runs and passes", () => {
    expect(true).toBe(true);
  });
});

describe("render without error", () => {
  it("Runs and passes", () => {
    render(<App />);
  });
});
