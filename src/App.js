import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [openedNavbar, setOpenedNavbar] = useState(false);

  return (
    <div className="App">
      {/* <nav className={openedNavbar && "show"}>NAVBAR
      <button onClick={()=>setOpenedNavbar(false)}>HIDE</button></nav>
      <main>MAIN
        <header><button onClick={()=>{setOpenedNavbar(true)}}>SHOW</button></header>
      </main> */}
      <Navbar
        openedNavbar={openedNavbar}
        closeNavbar={() => setOpenedNavbar(false)}
      />
      <Main>
        <Header showNavbar={() => setOpenedNavbar(true)} />
      </Main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
