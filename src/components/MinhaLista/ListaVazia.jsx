import React from 'react'
import "./MinhaLista.css"
import gatinho from "../../assets/img/empty-cr-list.png";

const ListaVazia = () => {
  return (
    <div>
        <img src={gatinho} alt="Miau"/>
        <h3>Poxa! Você ainda não tem nenhum livro favorito.</h3>
        {/* <button className='button-list-fav'><h3>EXPLORE NOVOS LIVROS!</h3></button> */}
    </div>
  )
}

export default ListaVazia