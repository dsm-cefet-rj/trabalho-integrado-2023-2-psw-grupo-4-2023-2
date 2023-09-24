import { KeyboardArrowRight } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Carousel from '../Carousel/Carousel'
import Livro from '../Livro/Livro'

const Sugestao = () => {
    return (
        <Box paddingTop={4} >
            <Carousel titulo={'Sugestões de Livros'}>
                <Livro urlImage={'https://picsum.photos/256/350'} />
                <Livro urlImage={'https://picsum.photos/256/350'} />
                <Livro urlImage={'https://picsum.photos/256/350'} />
                <Livro urlImage={'https://picsum.photos/256/350'} />
                <Livro urlImage={'https://picsum.photos/256/350'} />
                <Livro urlImage={'https://picsum.photos/256/350'} />
                <Livro urlImage={'https://picsum.photos/256/350'} />
                <Livro urlImage={'https://picsum.photos/256/350'} />
                <Livro urlImage={'https://picsum.photos/256/350'} />
            </Carousel>
        </Box>
    )
}

export default Sugestao