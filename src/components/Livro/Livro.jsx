import {
  Bookmark,
  BookmarkBorder,

} from "@mui/icons-material";
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

const Livro = ({
  titulo = "Titulo do Livro",
  autor = "Nome do Autor",
  urlImage,
  id,
}) => {
  const { usuario, setUsuario } = useUsuario();

  const favoritos = new Set(usuario?.favoritos.idsLivros);

  const existeFavorito = favoritos.has(id);

  const handleFavoritoClick = (event) => {
    event.stopPropagation();
    console.log(usuario)
    console.log(existeFavorito)

    if (existeFavorito) {
      const outrosIdsFavoritos = usuario?.favoritos.idsLivros.filter(
        (idLivro) => idLivro !== id
      );

      const outrosLivrosFavoritos = usuario?.favoritos.livros.filter(
        (livro) => livro.id !== id
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
          livros: [
            ...usuario.favoritos.livros,
            { id, titulo, autor, urlImage },
          ],
          idsLivros: [...usuario.favoritos.idsLivros, id],
        },
      });
    }
  };

  const leituras = usuario.continuarLendo.livros;
  let listaIDs = leituras.map((item) => item.id);

  const removerLendo = () => {
    const leiturasAtualizadas = leituras.filter((item) => item.id !== id);
    setUsuario({ ...usuario, continueLendo: {livros:leiturasAtualizadas} });
  };

  return (
    <Card
      sx={{ maxWidth: 256, minHeight: 570, position: "relative", margin: 0 }}
    >
      <Link href={`/preleitura/livro/${id}`} underline="none">
        <CardMedia
          component="img"
          alt={titulo}
          image={urlImage}
          loading="eager"
          sx={{ minHeight: 400 }}
        ></CardMedia>
        <CardContent>
          <Typography variant="body1" color="secondary" fontWeight="bolder">
            {titulo.length > 25 ? `${titulo.substring(0, 25)}...` : titulo}
          </Typography>
          <Typography variant="body2" color="primary">
            {autor.length > 50 ? `${autor.substring(0, 50)}...` : autor}
          </Typography>
        </CardContent>
      </Link>
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
        {listaIDs.includes(id) ? (
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
    </Card>
  );
};

export default Livro;
