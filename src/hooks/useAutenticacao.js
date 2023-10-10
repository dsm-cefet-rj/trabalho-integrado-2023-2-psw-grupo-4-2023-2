import { useContext } from "react";
import { AutenticacaoContext } from "../contexts/Autenticacao";

export function useAutenticacao() {
    const context = useContext(AutenticacaoContext);
    if (!context) {
      throw new Error("useAutenticacao deve ser usado dentro de um UserProvider.");
    }
    return context;
  }
  