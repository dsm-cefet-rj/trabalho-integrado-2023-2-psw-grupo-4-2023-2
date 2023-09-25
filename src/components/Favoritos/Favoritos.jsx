import React from 'react'
import Carousel from '../Carousel/Carousel'
import ListaVazia from '../ListaVazia/ListaVazia'
import prateleira from '../../assets/prateleira-vaiza.png'


const Favoritos = () => {

    return (
        <Carousel titulo={'Lista de Favoritos'} vazio={<ListaVazia text="Sua prateleira ainda não possui livros." urlImage={prateleira}/>}>
        </Carousel>
    )
}

export default Favoritos