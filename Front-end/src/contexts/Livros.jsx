import { createContext, useEffect, useState } from "react";
import { listaLivros } from "../services/livros";

export const LivrosContext = createContext();

const Livros = ({ children }) => {
  const [pesquisados, setPesquisados] = useState(null);
  const [livros, setLivros] = useState([]);

  const [livroSelecionado, setLivroSelecionado] = useState(() => {
    const livroArmazenado = localStorage.getItem("livro");
    return livroArmazenado ? JSON.parse(livroArmazenado) : null;
  });

  const pesquisar = (texto) => {
    const resultado = livros.filter((livro) => {
      const nome = livro.name.toLocaleLowerCase();
      const descricao = livro.descricao.toLocaleLowerCase();
      const textoLowerCase = texto.toLocaleLowerCase();
      return (
        nome.includes(`${textoLowerCase}`) ||
        descricao.includes(`${textoLowerCase}`)
      );
    });

    setPesquisados(resultado);
  };

  useEffect(() => {
    if (livroSelecionado) {
      localStorage.setItem("livro", JSON.stringify(livroSelecionado));
    } else {
      localStorage.removeItem("livro");
    }
  }, [livroSelecionado]);

  useEffect(() => {
    const fetchData = async () => {
      const livros = await listaLivros();
      setLivros(livros);
    };

    fetchData();
  }, []);

  return (
    <LivrosContext.Provider
      value={{
        colecao: livros,
        pesquisados,
        pesquisar,
        livroSelecionado,
        setLivroSelecionado,
      }}
    >
      {children}
    </LivrosContext.Provider>
  );
};

export default Livros;
