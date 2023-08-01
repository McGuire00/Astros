import "./Main.css";

import PitcherListView from "../PitcherListView/PitcherList";
function Main({ players }) {
  return (
    <div className="main">
      <h2>MLB Player Stats</h2>
      <PitcherListView players={players} />
    </div>
  );
}

export default Main;
