import { useState, useEffect } from "react";
import "./PitcherList.css";

import Pitcher from "../Pitcher/Pitcher";
function PitcherList({ players }) {
  return (
    <div className="container">
      <h1 className="players-title">Players</h1>
      <ul className="players-list">
        {players.map((player) => (
          <Pitcher key={player.id} player={player} />
        ))}
      </ul>
    </div>
  );
}

export default PitcherList;
