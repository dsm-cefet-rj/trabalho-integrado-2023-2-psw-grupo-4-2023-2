import { Bookmark, BookmarkAdd, BookmarkBorder, BookmarkRemove, BookmarksSharp } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'

const Livro = ({ titulo = "Titulo do Livro", autor = "Nome do Autor", urlImage }) => {
    const [favorito, setFavorito] = useState(false);

    const handleFavorito = () => {
        setFavorito(!favorito);
    }

    return (
        <Card>
            <CardMedia
                component="img"
                alt="green iguana"
                image={urlImage}
                loading='eager'
            >
            </CardMedia>
            <CardContent >
                <Typography variant='body1' color={'secondary'} fontWeight={'bolder'}>{titulo}</Typography>
                <Typography variant='body2' color={'primary'}>{autor}</Typography>
                <Box display={'flex'} justifyContent={'end'}>
                    <IconButton onClick={handleFavorito}>
                        {favorito? <Bookmark color='secondary'/> : <BookmarkBorder color='primary'/>}
                    </IconButton>
                </Box>
            </CardContent>
        </Card>

    )
}

export default Livro