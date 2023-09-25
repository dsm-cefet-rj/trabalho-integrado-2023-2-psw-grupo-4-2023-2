import { createContext, useState } from "react";
import data from './../../data/livros.json'

export const LivrosContext = createContext({});

const Livros = ({children}) => {
    return (
        <LivrosContext.Provider
            value={{livros:data}}
        >
            {children}
        </LivrosContext.Provider>
    )
}

export default Livros