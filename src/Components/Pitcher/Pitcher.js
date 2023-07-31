import "./Pitcher.css";
function Pitcher({ player }) {
  return (
    <div>
      <li className="player-list-item">
        <div className="player-name">{player.name}</div>
        <div className="player-info">
          <span className="player-team">Team: {player.team}</span>
          <span className="player-average">
            Batting Avg: {player.battingAverage}
          </span>
        </div>
      </li>
    </div>
  );
}

export default Pitcher;
