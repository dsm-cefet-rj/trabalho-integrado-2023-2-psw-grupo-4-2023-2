import axios from "axios";
const apiUrl = "http://localhost:3000/livros";

export async function listaLivros(ids) {
  try {
    const response = await axios.get(apiUrl, {params : {ids}});
    return response.data;
  } catch (error) {
    console.error("Erro ao listar livros:", error);
    throw error;
  }
}
