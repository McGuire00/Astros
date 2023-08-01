import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Games from "../Games/Games";
import PlayerDetailView from "../PlayerDetailView/PlayerDetailView";

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
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main players={players} />} />
          <Route path="/games" element={<Games />} />
          <Route path="/pitcher/:pitcherId" element={<PlayerDetailView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
