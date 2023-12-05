import React, { useEffect, useState } from 'react';
import { useContext } from 'react'
import Carousel from '../Carousel/Carousel'
import ListaVazia from '../ListaVazia/ListaVazia'
import prateleira from '../../assets/prateleira-vaiza.png'
import Livro from '../Livro/Livro'
import { AutenticacaoContext } from '../../contexts/Autenticacao'
import { useLivros } from '../../hooks/useLivros';
import * as LivrosServicos from '../../services/livros'


const Favoritos = () => {

    const { usuario } = useContext(AutenticacaoContext);
    const { colecao } = useLivros();

    const [livros, setLivros] = useState([]);

    useEffect(() => {
        (async () => {
            const livros = usuario.favoritos.length ? await LivrosServicos.listaLivros(usuario.favoritos) : [];
            setLivros(livros);
        })()
    }, [usuario, colecao])

    return (
        <Carousel titulo={'Lista de Favoritos'} vazio={<ListaVazia text="Sua prateleira ainda não possui livros." urlImage={prateleira} />}>
            {livros.map((data, index) => <Livro key={index} data={data} />)}
        </Carousel>
    )
}

export default Favoritos