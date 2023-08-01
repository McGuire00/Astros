import React from "react";
import { render, screen } from "@testing-library/react";
import PitcherListView from "./PitcherList";

describe("PitcherListView Component", () => {
  const mockPlayers = [
    { id: 1, name: "John Doe", team: "Team A", throws: "Right" },
    { id: 2, name: "Jane Smith", team: "Team B", throws: "Left" },
  ];

  test("renders the players title", () => {
    render(<PitcherListView players={mockPlayers} />);

    const playersTitle = screen.getByText("Players");
    expect(playersTitle).toBeInTheDocument();
  });

  test("renders the list of players correctly", () => {
    render(<PitcherListView players={mockPlayers} />);

    const playerNames = mockPlayers.map((player) => player.name);
    playerNames.forEach((name) => {
      const playerName = screen.getByText(name);
      expect(playerName).toBeInTheDocument();
    });
  });

  test("renders loading message when no players are provided", () => {
    render(<PitcherListView players={null} />);

    const loadingMessage = screen.getByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();
  });
});
