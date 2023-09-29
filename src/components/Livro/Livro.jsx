import { Bookmark, BookmarkAdd, BookmarkBorder, BookmarkRemove, BookmarksSharp} from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Card, CardContent, CardMedia, IconButton, Link, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'

import { LivrosContext } from "../../contexts/Livros";
import { AutenticacaoContext } from "../../contexts/Autenticacao";

const Livro = ({ titulo = "Titulo do Livro", autor = "Nome do Autor", urlImage, id }) => {

    const { favoritos, favorita, desfavorita } = useContext(LivrosContext);

    const { usuario, setUsuario } = useContext(AutenticacaoContext);
    const leituras = usuario.leituras;
    let listaIDs = leituras.map(item => item.id);     

    const meusFavoritos = favoritos.find(data => data.userLogin === usuario.email)
    
    const [favorito, setFavorito] = useState(false);
    
    const handleFavorito = () => {
        if (!favorito) {
            favorita(usuario.email, id);
        } else {
            desfavorita(usuario.email, id);
        }
    }
    
    const removerLendo=()=>{
        let leiturasAtualizadas = leituras.filter(item => item.id !== id);
        setUsuario({...usuario, leituras: leiturasAtualizadas});
    }

    useEffect(() => {
        const livroFavoritado = meusFavoritos?.livros.find(livro => livro.id === id)
        if (livroFavoritado) {
            setFavorito(true);
        } else {
            setFavorito(false);
        }
    }, [meusFavoritos, id])

    return (

        <Card sx={{ maxWidth: 256, minHeight: 570, position:'relative', margin:0}}>
            <Link href={`/preleitura/livro/${id}`} underline='none'>
                <CardMedia
                    component="img"
                    alt={titulo}
                    image={urlImage}
                    loading='eager'
                    sx={{ minHeight: 400 }}
                >
                </CardMedia>
                <CardContent>
                    <Typography variant="body1" color="secondary" fontWeight="bolder">
                        {titulo.length > 25 ? `${titulo.substring(0, 25)}...` : titulo}
                    </Typography>
                    <Typography variant="body2" color="primary">
                        {autor.length > 50 ? `${autor.substring(0, 50)}...` : autor}
                    </Typography>
                </CardContent>
            </Link >
            <IconButton
                onClick={handleFavorito}
                sx={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                }}
            >
                {favorito ? (
                    <Bookmark color="secondary" />
                ) : (
                    <BookmarkBorder color="primary" />
                )}
            </IconButton>
            {listaIDs.includes(id)?(
                <IconButton 
                    onClick={removerLendo}
                    aria-label="delete"
                    sx={{
                        position: "relative",
                        bottom: "8px",
                        right: "8px",
                    }}>
                    <DeleteIcon/>
                </IconButton>):(
                "")
            }
            
        </Card>

    );
};

export default Livro;
