import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Sugestao from "./components/Sugestao";

function App() {
  const [openedNavbar, setOpenedNavbar] = useState(false);

  return (
    <div className="App">
      <Navbar
        openedNavbar={openedNavbar}
        closeNavbar={() => setOpenedNavbar(false)}
      />
      <Main>
        <Header showNavbar={() => setOpenedNavbar(true)} />
        <Sugestao />
      </Main>
    </div>
  );
}

export default App;
