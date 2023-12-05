import axios from "axios";
const apiUrl = "http://localhost:3000/leitores";

export async function listaUsuarios() {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
}

export async function criarUsuario(usuario) {
  try {
    const response = await axios.post(apiUrl, usuario);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
}

export async function buscarUsuarioPorId(id) {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário por ID:", error);
    throw error;
  }
}

export async function buscarUsuarioPorEmail(email) {
  try {
    const response = await axios.get(`${apiUrl}?email=${email}`);
    return response.data[0];
  } catch (error) {
    console.error("Erro ao buscar usuário por Email:", error);
    throw error;
  }
}

export async function atualizarUsuario(id, novoUsuario) {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, novoUsuario);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
}

export async function login(email, senha) {
  try {
    const response = await axios.post(`${apiUrl}/login`, {email, senha});
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
}
