import { useState, useEffect } from "react";
import "./PitcherList.css";

import Pitcher from "../Pitcher/Pitcher";

function PitcherListView({ players }) {
  return (
    <div className="container">
      <h1 className="players-title">Players</h1>
      {players ? (
        <ul className="players-list">
          {players.map((player) => (
            <Pitcher key={player.id} player={player} />
          ))}
        </ul>
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
    </div>
  );
}

export default PitcherListView;
