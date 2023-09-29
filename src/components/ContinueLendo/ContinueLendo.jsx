import React from 'react'
import { useContext } from 'react'
import Carousel from '../Carousel/Carousel'
import ListaVazia from '../ListaVazia/ListaVazia'
import Gato from '../../assets/gatinho-triste.png'
import { AutenticacaoContext } from '../../contexts/Autenticacao'
import { LivrosContext } from '../../contexts/Livros'
import Livro from '../Livro/Livro'

const ContinueLendo = () => {
    const {usuario} = useContext(AutenticacaoContext);
    const leituras = usuario.leituras;
    const { livros } = useContext(LivrosContext);
    // const lista = leituras.id.find(data=>data.userLogin===usuario.email);
    let listaIDs = leituras.map(item => item.id) 
    console.log(leituras)
    return (
        <Carousel titulo={'Continue Lendo'} vazio={<ListaVazia text="Você ainda não está lendo nenhum livro..." urlImage={Gato}/>}>
            {livros?.length ? livros.map( => <Livro key={livro.id} id={livro.id} urlImage={livro.url} titulo={livro.name} autor={livro.descricao} />) : ""}
        </Carousel>
    )
}

export default ContinueLendo