import React, { useState } from 'react';
import "./App.css"


function App() {
  const [openedNavbar, setOpenedNavbar] = useState(false);
  const [value, setValue] = useState([]);
  console.log("REDER")

  const v = []

  return (
    <div className="App" style={{display:"flex"}}>
      <nav className={openedNavbar && "show"}>NAVBAR
      <button onClick={()=>setOpenedNavbar(false)}>HIDE NAVBAR</button></nav>
      <main>MAIN
        <header><button onClick={()=>{setOpenedNavbar(true); setValue(v)}}>{value}</button></header>
        <header><button onClick={()=>{v.push("Matheus"); console.log(v)}}>PUSH</button></header>
      </main>
    </div>
  );


}

export default App;
