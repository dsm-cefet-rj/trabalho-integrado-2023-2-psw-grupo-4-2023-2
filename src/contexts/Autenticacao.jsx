import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const AutenticacaoContext = createContext({});

export const Autenticacao = ({ children }) => {

    const [usuarios, setUsuarios] = useState(() => {
        const storedUsers = localStorage.getItem("usuarios");
        return storedUsers ? JSON.parse(storedUsers) : [];
    });

    useEffect(() => {
        if (usuarios) {
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        } else {
            localStorage.removeItem("usuarios");
        }
    }, [usuarios]);


    const [usuario, setUsuario] = useState(() => {
        const storedUser = localStorage.getItem("usuario");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (usuario) {
            localStorage.setItem("usuario", JSON.stringify(usuario));
            
        } else {
            localStorage.removeItem("usuario");
        }
    }, [usuario]);


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

    const cadastrar = (nome, email, password, celular) => {
        const id = uuidv4();

        const novoUsuario = { id, nome, email, password, celular, leituras:[], favoritos: []};

        const existeUsuario = usuarios.find(usuario => (usuario?.email === email));

        if (existeUsuario) {
            existeUsuario.nome = nome
            existeUsuario.password = password;
        } else {
            setUsuarios([...usuarios, novoUsuario]);
        }
        return;
    };

    const excluir = (email, password) => {
        if (acessar(email, password)) {

            const usuariosAtualizados = usuarios.filter((usuario) => usuario.email !== email);
            setUsuarios(usuariosAtualizados);

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
