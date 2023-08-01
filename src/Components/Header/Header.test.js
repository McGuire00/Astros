import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header Component", () => {
  test("renders the title correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const title = screen.getByText("Baseball Data");
    expect(title).toBeInTheDocument();
  });

  test("renders the navigation links correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByText("Home");
    const gamesLink = screen.getByText("Games");
    const contactLink = screen.getByText("Contact");

    expect(homeLink).toBeInTheDocument();
    expect(gamesLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test("navigates to the correct route when clicking on a link", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByText("Home");
    const gamesLink = screen.getByText("Games");
    const contactLink = screen.getByText("Contact");

    expect(homeLink).toHaveAttribute("href", "/");
    expect(gamesLink).toHaveAttribute("href", "/games");
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});
