import { useState, useEffect } from "react";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Astros from "../../util/Astros";
function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getBaseballData();
  }, []);

  function getBaseballData() {
    Astros.getPitches().then((data) => {
      setData(data);
    });
  }
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
