import React, { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  buscarUsuarioPorEmail,
  criarUsuario,
  listaUsuarios,
} from "../services/usuarios";
import { useUsuario } from "../hooks/useUsuario";

export const AutenticacaoContext = createContext({});

export const Autenticacao = ({ children }) => {
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

      console.log(usuarioExistente)

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
};
