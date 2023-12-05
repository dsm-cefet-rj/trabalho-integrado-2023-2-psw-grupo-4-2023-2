import { Bookmark, BookmarkBorder, MoreVert } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

import { useUsuario } from "../../hooks/useUsuario";
import { useLivros } from "./../../hooks/useLivros";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useControlador } from "./../../hooks/useControlador";

const Livro = ({ data }) => {
  const { usuario, setUsuario } = useUsuario();
  const { setLivroSelecionado } = useLivros();
  const { setOpenModal, setTipoModal } = useControlador();
  const [livroMenu, setLivroMenu] = useState(null);

  const open = Boolean(livroMenu);
  const handleLivroMenu = (event) => {
    event.stopPropagation();
    setLivroMenu(event.currentTarget);
  };
  const handleCloseLivroMenu = (event) => {
    event.stopPropagation();
    setLivroMenu(null);
  };

  const navigate = useNavigate();

  // const favoritos = new Set(usuario?.favoritos.idsLivros);

  // const existeFavorito = favoritos.has(data.id);

  const handleCardClick = () => {
    setLivroSelecionado(data);

    navigate(`/preleitura/${data._id}`);
  };

  const handleFavoritoClick = (event) => {
      event.stopPropagation();
      // if (existeFavorito) {
      //   const outrosIdsFavoritos = usuario?.favoritos.idsLivros.filter(
      //     (idLivro) => idLivro !== data.id
      //   );

      //   const outrosLivrosFavoritos = usuario?.favoritos.livros.filter(
      //     (livro) => livro.id !== data.id
      //   );

      //   setUsuario({
      //     ...usuario,
      //     favoritos: {
      //       livros: [...outrosLivrosFavoritos],
      //       idsLivros: [...outrosIdsFavoritos],
      //     },
      //   });
      // } else {
      //   setUsuario({
      //     ...usuario,
      //     favoritos: {
      //       livros: [...usuario.favoritos.livros, data],
      //       idsLivros: [...usuario.favoritos.idsLivros, data.id],
      //     },
      //   });
      // }
  };

  const livrosId = usuario.leituras.map((leituras) => leituras.livroId);

  const removerLendo = (event) => {
    event.stopPropagation();

    const livrosAtualizados = usuario.leituras.filter(
      (item) => item.livroId !== data._id
    );

    setUsuario({
      ...usuario,
      leituras: [...livrosAtualizados],
    });
  };

  const openModalAlterar = (event) => {
    event.stopPropagation();
    handleCloseLivroMenu();
    setLivroSelecionado(data);
    setTipoModal("alterarLivro");
    setOpenModal(true);
  };

  const openModalExcluir = (event) => {
    event.stopPropagation();
    handleCloseLivroMenu();
    setLivroSelecionado(data);
    setTipoModal("excluirLivro");
    setOpenModal(true);
  };

  const openModalRestaurar = (event) => {
    event.stopPropagation();
    handleCloseLivroMenu();
    setLivroSelecionado(data);
    setTipoModal("restaurarLivro");
    setOpenModal(true);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 256,
          minHeight: 570,
          position: "relative",
          margin: 0,
          cursor: "pointer",
        }}
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
          <Stack
            direction={"row"}
            spacing={1}
            sx={{
              position: "absolute",
              bottom: "8px",
              right: "8px",
            }}
          >
            {livrosId.includes(data._id) && (
              <IconButton
                onClick={removerLendo}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            )}
            <IconButton onClick={handleFavoritoClick}>
              {/* {existeFavorito ? (
                <Bookmark color="secondary" />
              ) : (
                <BookmarkBorder color="primary" />
                )} */}
                <BookmarkBorder />
            </IconButton>
            {usuario.nivel === "adm" && (
              <IconButton onClick={handleLivroMenu} id="menu-button">
                <MoreVert color="primary" />
              </IconButton>
            )}
          </Stack>

          <Menu
            id="livro-menu"
            disableScrollLock
            anchorEl={livroMenu}
            open={open}
            onClose={handleCloseLivroMenu}
            MenuListProps={{
              "aria-labelledby": "menu-button",
            }}
          >
            <MenuItem onClick={openModalAlterar}>Alterar</MenuItem>
            {data.excluido ? (
              <MenuItem onClick={openModalRestaurar}>Restaurar</MenuItem>
            ) : (
              <MenuItem onClick={openModalExcluir}>Excluir</MenuItem>
            )}
          </Menu>
        </CardContent>
      </Card>
    </>
  );
};

export default Livro;
