import UsuarioLogado from "./pages/UsuarioLogado";
import PreLeitura from "./pages/PreLeitura";
import ReadingBook from "./pages/ReadingBook";
import Acervo from "./pages/Acervo";
import Home from "./pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MeusFavoritos from "./pages/MeusFavoritos";
import livros from '../src/assets/livros.json'
import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userlogado" element={<UsuarioLogado />} />
          <Route path="/preleitura" element={<PreLeitura />} />
          <Route path="/lendolivro" element={<ReadingBook />} />
          <Route path="/meusfavoritos" element={<MeusFavoritos />}/>
          <Route path="/acervo" element={<Acervo livros={livros} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
