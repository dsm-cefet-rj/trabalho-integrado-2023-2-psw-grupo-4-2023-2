import React from 'react'
import Carousel from '../Carousel/Carousel'
import ListaVazia from '../ListaVazia/ListaVazia'
import Gato from '../../assets/gatinho-triste.png'


const ContinueLendo = () => {
    const {usuario, setUsuario} = useContext(AutenticacaoContext);
    const leituras = usuario.leituras;
    
    return (
        <Carousel titulo={'Continue Lendo'} vazio={<ListaVazia text="Você ainda não está lendo nenhum livro..." urlImage={Gato}/>}>
        </Carousel>
    )
}

export default ContinueLendo