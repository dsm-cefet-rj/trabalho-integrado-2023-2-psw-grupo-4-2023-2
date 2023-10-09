import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {useFetch} from "../hooks/useFetch";
export const AutenticacaoContext = createContext({});

export const Autenticacao = ({ children }) => {
    const urlUsers = "http://localhost:3000/usuarios";
    const {data:usuarios, httpConfig} = useFetch(urlUsers);
    
    // const [usuarios, setUsuarios] = useState(() => {
    //     const storedUsers = localStorage.getItem("usuarios");
    //     return storedUsers ? JSON.parse(storedUsers) : [];
    // });

    // useEffect(() => {
    //     if (usuarios) {
    //         localStorage.setItem("usuarios", JSON.stringify(usuarios));
    //     } else {
    //         localStorage.removeItem("usuarios");
    //     }
    // }, [usuarios]);


    const [usuario, setUsuario] = useState(() => {
        // const storedUser = localStorage.getItem("usuario");
        // return storedUser ? JSON.parse(storedUser) : null;
    });

    // useEffect(() => {
    //     if (usuario) {
    //         localStorage.setItem("usuario", JSON.stringify(usuario));
            
    //     } else {
    //         localStorage.removeItem("usuario");
    //     }
    // }, [usuario]);


    const acessar = (email, password) => {
    
        const existeUsuario = usuarios.find(usuario => (usuario?.email === email));
        
        if (existeUsuario) {
            if (existeUsuario.password === password) {
                setUsuario(existeUsuario)
                return true;
            }

            return false;
        }
        
    };

    const cadastrar = (nome, email, password, endereco, celular) => {
        const id = uuidv4();

        const novoUsuario = { id, nome, email, password, endereco, celular, leituras:[], favoritos: []};
        
        
        const existeUsuario = usuarios.find(usuario => (usuario?.email === email));
        if (existeUsuario) {
            existeUsuario.nome = nome
            existeUsuario.password = password;
        } else {
            // setUsuarios([...usuarios, novoUsuario]);
            httpConfig(novoUsuario,"POST");
        }
        return;
        
    };

    const excluir = (email, password) => {
        if (acessar(email, password)) {

            const usuarioDeletar = usuarios.filter((usuario) => usuario.email === email);
            httpConfig(usuarioDeletar,"DELETE")

            return true
        }
        return false
    };

    const sair = () => {
        setUsuario(null);
    };

    return (
        <AutenticacaoContext.Provider
            value={{ usuario, signed: !!usuario, acessar, cadastrar, sair, excluir, setUsuario }}
        >
            {children}
        </AutenticacaoContext.Provider>
    );
};
