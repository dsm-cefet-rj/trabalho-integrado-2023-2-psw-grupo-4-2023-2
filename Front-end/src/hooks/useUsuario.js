import { useContext } from "react";
import { UsuarioContext } from "../contexts/Usuario";

export function useUsuario() {
    const context = useContext(UsuarioContext);
    if (!context) {
      throw new Error("useUsuario deve ser usado dentro de um Usuario provider.");
    }
    return context;
  }
  