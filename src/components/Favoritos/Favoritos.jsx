import React from 'react';
import { useContext } from 'react'
import Carousel from '../Carousel/Carousel'
import ListaVazia from '../ListaVazia/ListaVazia'
import prateleira from '../../assets/prateleira-vaiza.png'
import { LivrosContext } from '../../contexts/Livros'
import Livro from '../Livro/Livro'
import { AutenticacaoContext } from '../../contexts/Autenticacao'


const Favoritos = () => {

    const { favoritos } = useContext(LivrosContext);
    const { usuario } = useContext(AutenticacaoContext);

    const lista = favoritos.find(data=>data.userLogin===usuario.login)

    return (
        <Carousel titulo={'Lista de Favoritos'} vazio={<ListaVazia text="Sua prateleira ainda não possui livros." urlImage={prateleira} />}>
            {lista?.livros ? lista.livros.map(livro => <Livro key={livro.id} id={livro.id} urlImage={livro.url} titulo={livro.name} autor={livro.descricao} />) : ""}
        </Carousel>
    )
}

export default Favoritos