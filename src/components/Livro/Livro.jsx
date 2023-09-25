import { Bookmark, BookmarkAdd, BookmarkBorder, BookmarkRemove, BookmarksSharp } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'

import { LivrosContext } from '../../contexts/Livros';
import { AutenticacaoContext } from '../../contexts/Autenticacao';

const Livro = ({ titulo = "Titulo do Livro", autor = "Nome do Autor", urlImage, id }) => {

    const { favoritos, favorita, desfavorita } = useContext(LivrosContext);
    const { user } = useContext(AutenticacaoContext);

    const meusFavoritos = favoritos.find(data => data.userLogin === user.login)

    const [favorito, setFavorito] = useState(false);

    const handleFavorito = () => {
        if (!favorito) {
            favorita(user.login, id);
        } else {
            desfavorita(user.login, id);
        }
    }

    useEffect(() => {
        const livroFavoritado = meusFavoritos?.livros.find(livro => livro.id === id)
        if (livroFavoritado){
            setFavorito(true);
        }else{
            setFavorito(false);
        }
    }, [meusFavoritos])

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
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px'
                }}>
                    {favorito ? <Bookmark color='secondary' /> : <BookmarkBorder color='primary' />}
                </IconButton>

            </CardContent>
        </Card>

    )
}

export default Livro