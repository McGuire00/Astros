import { useState, useEffect } from "react";
import "./PitcherList.css";

import Pitcher from "../Pitcher/Pitcher";
function PitcherList() {
  // Mock data for MLB players and their stats
  const mockData = [
    { id: 1, name: "Player A", team: "Team X", battingAverage: 0.302 },
    { id: 2, name: "Player B", team: "Team Y", battingAverage: 0.275 },
    { id: 3, name: "Player C", team: "Team Z", battingAverage: 0.32 },
    { id: 1, name: "Player A", team: "Team X", battingAverage: 0.302 },
    { id: 2, name: "Player B", team: "Team Y", battingAverage: 0.275 },
    { id: 3, name: "Player C", team: "Team Z", battingAverage: 0.32 },
    { id: 1, name: "Player A", team: "Team X", battingAverage: 0.302 },
    { id: 2, name: "Player B", team: "Team Y", battingAverage: 0.275 },
    { id: 3, name: "Player C", team: "Team Z", battingAverage: 0.32 },
    // Add more players here...
  ];

  const [players, setPlayers] = useState(mockData);
  return (
    <div className="container">
      <h1 className="players-title">MLB Players Stats</h1>
      <ul className="players-list">
        {players.map((player) => (
          <Pitcher key={player.id} player={player} />
        ))}
      </ul>
    </div>
  );
}

export default PitcherList;
