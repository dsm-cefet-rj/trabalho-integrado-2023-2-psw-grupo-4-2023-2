import React from 'react';
import { useContext } from 'react'
import Carousel from '../Carousel/Carousel'
import ListaVazia from '../ListaVazia/ListaVazia'
import prateleira from '../../assets/prateleira-vaiza.png'
import { LivrosContext } from '../../contexts/Livros'
import Livro from '../Livro/Livro'
import { AutenticacaoContext } from '../../contexts/Autenticacao'


const Favoritos = () => {

    const { usuario } = useContext(AutenticacaoContext);

    return (
        <Carousel titulo={'Lista de Favoritos'} vazio={<ListaVazia text="Sua prateleira ainda não possui livros." urlImage={prateleira} />}>
            {usuario.favoritos.livros.map((livro, index) => <Livro key={index} id={livro.id} urlImage={livro.urlImage} titulo={livro.titulo} autor={livro.autor} />)}
        </Carousel>
    )
}

export default Favoritos