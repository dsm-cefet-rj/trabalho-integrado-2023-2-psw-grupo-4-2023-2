import { useContext } from "react";
import { LivrosContext } from "../contexts/Livros";

export function useLivros() {
    const context = useContext(LivrosContext);
    if (!context) {
      throw new Error("useLivros deve ser usado dentro de um Livros provider.");
    }
    return context;
  }
  