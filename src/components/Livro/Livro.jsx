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

  const leituras = usuario.continuarLendo.livros;
  let listaIDs = leituras.map((item) => item.id);

  const removerLendo = () => {
    const leiturasAtualizadas = leituras.filter((item) => item.id !== id);
    setUsuario({ ...usuario, continueLendo: { livros: leiturasAtualizadas } });
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
};

export default Livro;
