import UsuarioLogado from "./pages/UsuarioLogado";
import PreLeitura from "./pages/PreLeitura";
import ReadingBook from "./pages/ReadingBook";
import Home from "./pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MeusFavoritos from "./pages/MeusFavoritos";
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
          <Route path="/MeusFavoritos" element={<MeusFavoritos />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
