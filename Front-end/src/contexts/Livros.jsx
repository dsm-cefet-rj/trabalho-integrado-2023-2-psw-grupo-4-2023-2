<<<<<<< HEAD
import { createContext, useState, useEffect } from "react";
import data from './../../data/livros.json'

export const LivrosContext = createContext({});

const Livros = ({ children }) => {
    // const [favoritos, setFavoritos] = useState([]);
    const [favoritos, setFavoritos] = useState(() => {
        const storedFavoritos = localStorage.getItem("favoritos");
        return storedFavoritos ? JSON.parse(storedFavoritos) : [];
    });

    useEffect(() => {
        if (favoritos) {
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
        } else {
            localStorage.removeItem("favoritos");
        }
    }, [favoritos]);


    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    
    const desfavorita = (userLogin, livroId) => {
        const lista = favoritos.find((data) => data.userLogin === userLogin);

        if (lista) {
            const novosLivros = lista.livros.filter((livro) => livro.id !== livroId);
            setFavoritos((favoritos) =>
                favoritos.map((data) =>
                    data.userLogin === userLogin ? { ...data, livros: novosLivros } : data
                )
            );
        }
    };

    const favorita = (userLogin, livroId) => {
        const lista = favoritos.find((data) => data.userLogin === userLogin);

        if (lista) {
            const livroExistente = lista.livros.find((livro) => livro.id === livroId);

            if (!livroExistente) {
                const novoLivro = data.find((livro) => livro.id === livroId);

                if (novoLivro) {
                    setFavoritos((favoritos) =>
                        favoritos.map((data) =>
                            data.userLogin === userLogin
                                ? { ...data, livros: [...data.livros, novoLivro] }
                                : data
                        )
                    );
                }
            }
        } else {
            const novoLivro = data.find((livro) => livro.id === livroId);

            if (novoLivro) {
                setFavoritos((favoritos) => [
                    ...favoritos,
                    { userLogin, livros: [novoLivro] },
                ]);
            }
        }
    };

    return (
        <LivrosContext.Provider
            value={{
                livros: data,
                favoritos,
                favorita,
                desfavorita,
                livrosPesquisados,
                setLivrosPesquisados
            }}
        >
            {children}
        </LivrosContext.Provider>
    );
=======
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
  
  useEffect(() => {
    console.log(livros);
  }, [livros]);

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
>>>>>>> Json-server
};

export default Livros;
