import React from "react";
import { render, screen } from "@testing-library/react";
import Pitcher from "./Pitcher";

describe("Pitcher Component", () => {
  const playerData = {
    name: "John Doe",
    team: "Example Team",
    throws: "Right",
  };

  test("renders the player's name correctly", () => {
    render(<Pitcher player={playerData} />);

    const playerName = screen.getByText("John Doe");
    expect(playerName).toBeInTheDocument();
  });

  test("renders the player's team correctly", () => {
    render(<Pitcher player={playerData} />);

    const playerTeam = screen.getByText("Team: Example Team");
    expect(playerTeam).toBeInTheDocument();
  });

  test("renders the player's throwing hand correctly", () => {
    render(<Pitcher player={playerData} />);

    const playerThrows = screen.getByText("Throws: Right");
    expect(playerThrows).toBeInTheDocument();
  });

  test("renders the player's information correctly", () => {
    render(<Pitcher player={playerData} />);

    const playerName = screen.getByText("John Doe");
    const playerTeam = screen.getByText("Team: Example Team");
    const playerThrows = screen.getByText("Throws: Right");

    expect(playerName).toBeInTheDocument();
    expect(playerTeam).toBeInTheDocument();
    expect(playerThrows).toBeInTheDocument();
  });
});
