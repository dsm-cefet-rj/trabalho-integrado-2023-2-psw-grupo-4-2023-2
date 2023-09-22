import UsuarioLogado from "./pages/UsuarioLogado";
import PreLeitura from "./pages/PreLeitura";
import ReadingBook from "./pages/ReadingBook";
import Home from "./pages/Home/Home";
import MeusFavoritos from "./pages/MeusFavoritos"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DadosUsuario from "./pages/DadosUsuario";
import RelatorioUsuario from "./pages/RelatorioUsuario";

import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-logado" element={<UsuarioLogado />} />
          <Route path="/PreLeitura/:id" element={<PreLeitura />}/>

          <Route path="/lendolivro" element={<ReadingBook />} />
          <Route path="/DadosUsuario" element={<DadosUsuario />} />
          <Route path="/MeusFavoritos" element={<MeusFavoritos/>} />
          <Route path="/RelatorioUsuario" element={<RelatorioUsuario />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
