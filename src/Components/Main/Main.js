import "./Main.css";

import PitcherList from "../PitcherList/PitcherList";
function Main({ players }) {
  return (
    <div className="main">
      <h2>MLB Player Stats</h2>
      <PitcherList players={players} />
    </div>
  );
}

export default Main;
