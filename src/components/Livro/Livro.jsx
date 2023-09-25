import { Bookmark, BookmarkAdd, BookmarkBorder, BookmarkRemove, BookmarksSharp } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'

const Livro = ({ titulo = "Titulo do Livro", autor = "Nome do Autor", urlImage }) => {
    const [favorito, setFavorito] = useState(false);

    const handleFavorito = () => {
        setFavorito(!favorito);
    }

    return (
        <Card sx={{ maxWidth: 256, minHeight: 570 }}>
            <CardMedia
                component="img"
                alt={titulo}
                image={urlImage}
                loading='eager'
                sx={{ minHeight: 400 }}
            >
            </CardMedia>
            <CardContent >
                <Typography variant='body1' color={'secondary'} fontWeight={'bolder'}>{titulo}</Typography>
                <Typography variant='body2' color={'primary'}>{autor}</Typography>
                <IconButton onClick={handleFavorito} sx={{
                    position:'absolute',
                    bottom:'8px',
                    right:'8px'
                }}>
                    {favorito ? <Bookmark color='secondary' /> : <BookmarkBorder color='primary' />}
                </IconButton>

            </CardContent>
        </Card>

    )
}

export default Livro