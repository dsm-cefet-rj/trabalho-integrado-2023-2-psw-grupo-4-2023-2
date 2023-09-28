import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const AutenticacaoContext = createContext({});

export const Autenticacao = ({ children }) => {

    const [usuarios, setUsuarios] = useState(() => {
        const storedUsers = localStorage.getItem("users");
        return storedUsers ? JSON.parse(storedUsers) : [];
    });

    useEffect(() => {
        if (usuarios) {
            localStorage.setItem("users", JSON.stringify(usuarios));
        } else {
            localStorage.removeItem("users");
        }
    }, [usuarios]);


    const [usuario, setUsuario] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (usuario) {
            localStorage.setItem("user", JSON.stringify(usuario));

        } else {
            localStorage.removeItem("user");
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

    const cadastrar = (nome, email, password) => {
        const id = uuidv4();

        const novoUsuario = { id, nome, email, password, leituras: [], favoritos: [] };

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
            setUsers(usuariosAtualizados);

            return true
        };

        return false

    };

    const sair = () => {
        setUsuario(null);
    };


    return (
        <AutenticacaoContext.Provider
            value={{ usuario, signed: !!usuario, acessar, cadastrar, sair, excluir }}
        >
            {children}
        </AutenticacaoContext.Provider>
    );
};
