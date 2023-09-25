import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./layouts/Principal";
import { Perfil } from "./pages/Perfil";
import Home from "./pages/Home";
import PreLeitura from "./pages/PreLeitura";
import Favoritos from "./pages/Favoritos";
import { AutenticacaoContext } from "./contexts/Autenticacao";
import Acesso from "./pages/Acesso";
import { useContext } from "react";
import Leitura from "./pages/Leitura";
import Acervo from "./pages/Acervo";

const Privado = ({ Page }) => {
  const { signed } = useContext(AutenticacaoContext);
  return signed ? Page : <Acesso />;
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Privado Page={<Principal />} />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="acervo" element={<Acervo />} />
          <Route path="leitura/:urlPdf" element={<Leitura />} />
          <Route path="preleitura/livro/:id" element={<PreLeitura />} />
          <Route path="*" element={<h1>Pagina não encontrada</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
