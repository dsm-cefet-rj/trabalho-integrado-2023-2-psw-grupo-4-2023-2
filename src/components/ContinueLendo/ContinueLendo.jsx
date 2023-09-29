import React, { useContext } from 'react'
import Carousel from '../Carousel/Carousel'
import ListaVazia from '../ListaVazia/ListaVazia'
import Gato from '../../assets/gatinho-triste.png'
import { AutenticacaoContext } from '../../contexts/Autenticacao'
import { LivrosContext } from '../../contexts/Livros'
import Livro from '../Livro/Livro'


const ContinueLendo = () => {

    const { usuario } = useContext(AutenticacaoContext);
    const idLivros = usuario.leituras.map(leitura => leitura.id);
    const leituras = new Set(idLivros);

    const { livros } = useContext(LivrosContext);

    const continueLendo = livros.filter(livro=>leituras.has(livro.id))

    return (
        <Carousel titulo={'Continue Lendo'} vazio={<ListaVazia text="Você ainda não está lendo nenhum livro..." urlImage={Gato} />}>
            {continueLendo.length? continueLendo.map(livro => <Livro key={livro.id} id={livro.id} urlImage={livro.url} titulo={livro.name} autor={livro.descricao} />) : ""}
        </Carousel>
    )
}

export default ContinueLendo