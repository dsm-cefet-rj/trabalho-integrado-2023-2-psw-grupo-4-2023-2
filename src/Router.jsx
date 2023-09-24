import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./layouts/Principal";
import Acesso from "./pages/Acesso/Acesso";
import { Perfil } from "./pages/Perfil";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil/>} />
          <Route path="favoritos" element={<Favoritos/>} />
          <Route path="*" element={<h1>Pagina não encontrada</h1>} />
        </Route>
        <Route path="/acesso" element={<Acesso />}>
          {/* <Route index element={<Signin />} />
          <Route path="signup" element={<Signup />} /> */}
          <Route path="*" element={<h1>Pagina não encontrada</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
