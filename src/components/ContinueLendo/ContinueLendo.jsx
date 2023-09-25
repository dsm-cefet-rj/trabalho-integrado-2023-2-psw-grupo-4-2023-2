import React from 'react'
import Carousel from '../Carousel/Carousel'
import ListaVazia from '../ListaVazia/ListaVazia'
import Gato from '../../assets/gatinho-triste.png'


const ContinueLendo = () => {

    return (
        <Carousel titulo={'Continue Lendo'} vazio={<ListaVazia text="Você ainda não está lendo nenhum livro..." urlImage={Gato}/>}>
        </Carousel>
    )
}

export default ContinueLendo