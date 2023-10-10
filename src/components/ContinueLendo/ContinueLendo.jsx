import React from 'react'
import { useContext } from 'react'
import Carousel from '../Carousel/Carousel'
import ListaVazia from '../ListaVazia/ListaVazia'
import Gato from '../../assets/gatinho-triste.png'
import { AutenticacaoContext } from '../../contexts/Autenticacao'
import Livro from '../Livro/Livro'

const ContinueLendo = () => {
    const {usuario} = useContext(AutenticacaoContext);

    return (
        <Carousel titulo={'Continue Lendo'} vazio={<ListaVazia text="Você ainda não está lendo nenhum livro..." urlImage={Gato}/>}>
            {usuario.continuarLendo.livros.map(livro => <Livro key={livro.id} id={livro.id} urlImage={livro.url} titulo={livro.name} autor={livro.descricao} /> )}
        </Carousel>
    )
}

export default ContinueLendo