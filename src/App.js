import UsuarioLogado from "./pages/UsuarioLogado";
import PreLeitura from "./pages/PreLeitura";
import ReadingBook from "./pages/ReadingBook";
import Home from "./pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userlogado" element={<UsuarioLogado />} />
          <Route path="/PreLeitura" element={<PreLeitura />} />
          <Route path="/lendolivro" element={<ReadingBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
