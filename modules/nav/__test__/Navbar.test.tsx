import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Navbar } from "../Navbar";

describe("Navbar", () => {
  it("renders correctly", () => {
    render(<Navbar />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
  it("has all necessary elements", () => {
    render(<Navbar />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByTestId("navbar")).toHaveTextContent("Home");
    expect(screen.getByTestId("navbar")).toHaveTextContent("About");
    expect(screen.getByTestId("navbar")).toHaveTextContent("Contact");
  });
});
