import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel'
import ListaVazia from '../ListaVazia/ListaVazia'
import Gato from '../../assets/gatinho-triste.png'
import Livro from '../Livro/Livro'
import { useUsuario } from '../../hooks/useUsuario'
import * as LivrosServicos from '../../services/livros'
import { useLivros } from '../../hooks/useLivros'

const ContinueLendo = () => {
    const { usuario } = useUsuario();
    const { colecao } = useLivros();

    const [livros, setLivros] = useState([]);

    useEffect(() => {
        (async () => {
            const livrosId = usuario.leituras.map((leitura) => leitura.livroId)
            const livros = livrosId.length ? await LivrosServicos.listaLivros(livrosId) : [];
            setLivros(livros);
        })()
    }, [usuario, colecao])

    return (
        <Carousel titulo={'Continue Lendo'} vazio={<ListaVazia text="Você ainda não está lendo nenhum livro..." urlImage={Gato} />}>
            {livros.map((data, index) => <Livro key={index} data={data} />)}
        </Carousel>
    )
}

export default ContinueLendo