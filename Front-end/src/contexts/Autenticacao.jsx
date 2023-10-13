<<<<<<< HEAD
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
=======
import React, { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  buscarUsuarioPorEmail,
  criarUsuario,
  listaUsuarios,
} from "../services/usuarios";
import { useUsuario } from "../hooks/useUsuario";
>>>>>>> Json-server

export const AutenticacaoContext = createContext({});

export const Autenticacao = ({ children }) => {
<<<<<<< HEAD

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

    const cadastrar = (nome, email, password, endereco, celular) => {
        const id = uuidv4();

        const novoUsuario = { id, nome, email, password, endereco, celular, leituras:[], favoritos: []};
        console.log(usuarios)
        
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
=======
  const usuarios = listaUsuarios();
  const { usuario, setUsuario } = useUsuario();

  const acessar = async (email, senha) => {

    const usuario = await buscarUsuarioPorEmail(email);
    if (usuario) {
      if (usuario.senha === senha) {
        setUsuario(usuario);
        return true;
      }
    }
    return false;
  };

  const cadastrar = async (nome, email, senha, endereco, celular) => {
    try {
      const id = uuidv4();

      const novoUsuario = {
        id,
        nome,
        email,
        senha,
        endereco,
        celular,
        favoritos: { livros: [], idsLivros: [] },
        continuarLendo: { livros: [], leitura: [] },
      };

      const usuarioExistente = await buscarUsuarioPorEmail(email);

      if (usuarioExistente) {
        throw Error("Já existe um usuário com este e-mail.");
      } else {
        await criarUsuario(novoUsuario);
      }

      return {
        sucesso: true,
        mensagem:
          "Usuário registrado com sucesso! Faça login usando o e-mail e a senha fornecidos.",
      };
    } catch (error) {
      return {
        sucesso: false,
        mensagem: error.message,
      };
    }
  };

  //   const excluir = (email, senha) => {
  //     if (acessar(email, senha)) {
  //       const usuariosAtualizados = usuarios.filter(
  //         (usuario) => usuario.email !== email
  //       );
  //       setUsuarios(usuariosAtualizados);

  //       return true;
  //     }

  //     return false;
  //   };

  const sair = () => {
    setUsuario(null);
  };

  return (
    <AutenticacaoContext.Provider
      value={{ usuario, autenticado: !!usuario, acessar, cadastrar, sair }}
    >
      {children}
    </AutenticacaoContext.Provider>
  );
>>>>>>> Json-server
};
