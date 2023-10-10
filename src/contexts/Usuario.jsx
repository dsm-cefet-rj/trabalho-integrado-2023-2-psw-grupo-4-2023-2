import { createContext, useContext, useEffect, useState } from "react";
import { atualizarUsuario } from "../services/usuarios";

export const UsuarioContext = createContext();

const Usuario = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const storedUser = localStorage.getItem("usuario");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    if (usuario) atualizarUsuario(usuario.id, usuario);
  }, [usuario]);

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export default Usuario;
