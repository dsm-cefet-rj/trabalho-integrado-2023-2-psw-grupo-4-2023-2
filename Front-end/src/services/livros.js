import axios from "axios";
const apiUrl = "http://localhost:3000/livros/";

export async function listaLivros() {
  try {
    const response = await axios.get(apiUrl+'?excluido=false',);
    return response.data;
  } catch (error) {
    console.error("Erro ao listar livros:", error);
    throw error;
  }
}

export async function listaExcluidos() {
  try {
    const response = await axios.get(apiUrl+'?excluido=true',);
    return response.data;
  } catch (error) {
    console.error("Erro ao listar livros:", error);
    throw error;
  }
}

export async function excluiLivro(id) {
  try {
    const response = await axios.patch(apiUrl+id,{excluido:true});
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir livro:", error);
    throw error;
  }
}
