import { Box } from '@mui/material'
import React, { useContext } from 'react'
import Carousel from '../Carousel/Carousel'
import Livro from '../Livro/Livro'

import { LivrosContext } from '../../contexts/Livros';

const Sugestao = () => {
    const { livros } = useContext(LivrosContext);

    return (
        <>
            {livros
                ?
                <Box paddingTop={4} >
                    <Carousel titulo={'Sugestões de Livros'}>
                        {livros.map(livro=><Livro key={livro.id} id={livro.id} urlImage={livro.url} titulo={livro.name} autor={livro.descricao}/>)}
                    </Carousel>
                </Box>
                : <></>
            }
        </>
    )
}

export default Sugestao