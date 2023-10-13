<<<<<<< HEAD
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
            <div style={{display:'flex', alingContent:'flex-end'}}>
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
                            position: "absolute",
                            bottom: "8px",
                            right: "8px",
                            marginRight: "78%"
                        }}>
                        <DeleteIcon/>
                    </IconButton>):(
                    "")
                }
            </div>
            
        </Card>

    );
=======
import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  Typography,
} from "@mui/material";

import { useUsuario } from "../../hooks/useUsuario";
import { useLivros } from "./../../hooks/useLivros";
import { useNavigate } from "react-router-dom";

const Livro = ({ data }) => {
  const { usuario, setUsuario } = useUsuario();
  const { setLivroSelecionado } = useLivros();

  const navigate = useNavigate();

  const favoritos = new Set(usuario?.favoritos.idsLivros);

  const existeFavorito = favoritos.has(data.id);

  const handleCardClick = () => {
    setLivroSelecionado(data);

    navigate(`/preleitura/${data.id}`);
  };

  const handleFavoritoClick = (event) => {
    event.stopPropagation();
    if (existeFavorito) {
      const outrosIdsFavoritos = usuario?.favoritos.idsLivros.filter(
        (idLivro) => idLivro !== data.id
      );

      const outrosLivrosFavoritos = usuario?.favoritos.livros.filter(
        (livro) => livro.id !== data.id
      );

      setUsuario({
        ...usuario,
        favoritos: {
          livros: [...outrosLivrosFavoritos],
          idsLivros: [...outrosIdsFavoritos],
        },
      });
    } else {
      setUsuario({
        ...usuario,
        favoritos: {
          livros: [...usuario.favoritos.livros, data],
          idsLivros: [...usuario.favoritos.idsLivros, data.id],
        },
      });
    }
  };

  const listaIDs = usuario.continuarLendo.livros.map((livro) => livro.id);

  const removerLendo = (event) => {
    event.stopPropagation();

    const livrosAtualizados = usuario.continuarLendo.livros.filter(
      (item) => item.id !== data.id
    );
    const leiturasAtualizadas = usuario.continuarLendo.leituras.filter(
      (item) => item.id !== data.id
    );
    setUsuario({
      ...usuario,
      continuarLendo: {
        livros: [...livrosAtualizados],
        leituras: [...leiturasAtualizadas],
      },
    });
  };

  return (
    <Card
      sx={{ maxWidth: 256, minHeight: 570, position: "relative", margin: 0 }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        alt={data.name}
        image={data.url}
        loading="eager"
        sx={{ minHeight: 400 }}
      ></CardMedia>
      <CardContent>
        <Typography variant="body1" color="secondary" fontWeight="bolder">
          {data.name.length > 25
            ? `${data.name.substring(0, 25)}...`
            : data.name}
        </Typography>
        <Typography variant="body2" color="primary">
          {data.descricao.length > 50
            ? `${data.descricao.substring(0, 50)}...`
            : data.descricao}
        </Typography>
        <div style={{ display: "flex", alingContent: "flex-end" }}>
          <IconButton
            onClick={handleFavoritoClick}
            sx={{
              position: "absolute",
              bottom: "8px",
              right: "8px",
            }}
          >
            {existeFavorito ? (
              <Bookmark color="secondary" />
            ) : (
              <BookmarkBorder color="primary" />
            )}
          </IconButton>
          {listaIDs.includes(data.id) ? (
            <IconButton
              onClick={removerLendo}
              aria-label="delete"
              sx={{
                position: "absolute",
                bottom: "8px",
                right: "8px",
                marginRight: "78%",
              }}
            >
              <DeleteIcon />
            </IconButton>
          ) : (
            ""
          )}
        </div>
      </CardContent>
    </Card>
  );
>>>>>>> Json-server
};

export default Livro;
