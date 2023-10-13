import React from 'react'
import ListaVaziaStyled from './ListaVazia.styled'
import { Box, Typography } from '@mui/material'

const ListaVazia = ({text, urlImage}) => {
    return (
        <ListaVaziaStyled>
            <Typography variant='body1' color={'secondary'} textAlign={'left'}>{text}</Typography>
            <Box component={'img'} src={urlImage} sx={{
                width:'128px'
            }}/>
        </ListaVaziaStyled>
    )
}

export default ListaVazia