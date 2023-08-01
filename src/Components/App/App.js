import { useState, useEffect } from "react";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Astros from "../../util/Astros";

function App() {
  const [data, setData] = useState();
  const [players, setPlayers] = useState();

  useEffect(() => {
    getPitchData();
  }, []);

  function getPitchData() {
    Astros.getPitches().then((data) => {
      setData(data);

      // Gets unique pitchers from data just received
      const players = Astros.getUniquePitchers(data);
      setPlayers(players);
    });
  }
  return (
    <div className="App">
      <Header />
      <Main players={players} />
      <Footer />
    </div>
  );
}

export default App;
