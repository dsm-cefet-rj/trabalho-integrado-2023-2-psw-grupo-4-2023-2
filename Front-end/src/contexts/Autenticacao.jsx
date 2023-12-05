import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as Usuarios from "../services/usuarios";
import { useUsuario } from "../hooks/useUsuario";

export const AutenticacaoContext = createContext({});

export const Autenticacao = ({ children }) => {
  const { usuario, setUsuario } = useUsuario();

  const acessar = async (email, senha) => {

    const res = await Usuarios.login(email, senha);

    if (res.sucesso) {
      const usuario = res.dados;
      // console.log(usuario)
      setUsuario(usuario);
      return true;
    }
    return false;
  };


  const cadastrar = async (nome, email, senha, endereco, celular) => {
    try {
      const novoUsuario = {
        nome,
        email,
        senha,
        endereco,
        celular
      };

      await Usuarios.criarUsuario(novoUsuario);

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
