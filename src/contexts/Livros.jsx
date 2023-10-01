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
};

export default Livros;
