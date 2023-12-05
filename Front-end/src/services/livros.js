import axios from "axios";
const endpoint = "livros/";
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL

export async function listaLivros(ids) {
  try {
    const response = await axios.get(VITE_BASE_URL + endpoint, {params : {ids}});
    return response.data;
  } catch (error) {
    console.error("Erro ao listar livros:", error);
    throw error;
  }
}

export async function listaExcluidos() {
  try {
    const response = await axios.get(VITE_BASE_URL + endpoint, { excluido: true });
    return response.data;
  } catch (error) {
    console.error("Erro ao listar livros:", error);
    throw error;
  }
}

export async function excluiLivro(id) {
  try {
    const response = await axios.patch(VITE_BASE_URL + endpoint + id, { excluido: true });
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir livro:", error);
    throw error;
  }
}

export async function restauraLivro(id) {
  try {
    const response = await axios.patch(VITE_BASE_URL + endpoint + id, { excluido: false });
    return response.data;
  } catch (error) {
    console.error("Erro ao restaurar livro:", error);
    throw error;
  }
}
