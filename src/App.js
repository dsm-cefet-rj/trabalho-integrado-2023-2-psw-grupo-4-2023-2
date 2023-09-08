import React, { useState } from 'react';
import "./App.css"


function App() {
  const [openedNavbar, setOpenedNavbar] = useState(false);

  return (
    <div className="App" style={{display:"flex"}}>
      <nav className={openedNavbar && "show"}>NAVBAR
      <button onClick={()=>setOpenedNavbar(false)}>HIDE</button></nav>
      <main>MAIN
        <header><button onClick={()=>{setOpenedNavbar(true)}}>SHOW</button></header>
      </main>
    </div>
  );


}

export default App;
