import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { useControlador } from "../../hooks/useControlador";
import { useEffect, useState } from "react";
import { Cancel } from "@mui/icons-material";
import { editaLivro } from "../../services/livros";
import { useLivros } from "../../hooks/useLivros";

const AlterarLivro = () => {
  const { openModal, setOpenModal } = useControlador();
  const { livroSelecionado, setLivroSelecionado, carregaLivros } = useLivros();
  console.log(livroSelecionado)

  const data = [
    {
      label: "url da imagem",
      type: "url",
      placeholder: "Coloque o link da imagem",
      value: livroSelecionado.url
    },
    {
      label: "titulo",
      type: "text",
      placeholder: "titulo do livro",
      value: livroSelecionado.name
    },
    {
      label: "descricao",
      type: "text",
      placeholder: "Descricao",
      value: livroSelecionado.descricao
    },
    {
      label: "sinopse",
      multiline: true,
      maxRows: 8,
      placeholder: "Sinopse",
      value: livroSelecionado.sinopse
    },
    {
      label: "genero",
      type: "text",
      placeholder: "Genero",
      value: livroSelecionado.genero
    },
  ]

  const [values, setValues] = useState(() => {
    return data.map((obj) => obj.value);
  });

  useEffect(() => {
    setValues(data.map((obj) => obj.value))
  }, [livroSelecionado])

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    const res = await editaLivro(livroSelecionado._id, values);

    if (res.success) {
      setLivroSelecionado(res.data)
    }
    await carregaLivros();
  };

  const handleValues = (e, index) => {
    const _values = [...values];
    _values[index] = e.target.value;
    setValues(_values);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Modal open={openModal} onClose={handleClose} disableScrollLock>
      <Box
        sx={{
          bgcolor: "Background",
          borderRadius: 1,
          boxShadow: 24,
          p: 4,
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { md: "50%" },
          maxWidth: "md"
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            {data.map((obj, index) => (
              <TextField
                key={index}
                type={obj.type}
                label={obj.label}
                placeholder={obj.placeholder}
                value={values[index]}
                multiline={obj.multiline}
                maxRows={obj.maxRows}
                onChange={(e) => {
                  handleValues(e, index);
                }}
              />
            ))}
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </Stack>
        </form>

        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onClick={handleClose}
        >
          <Cancel fontSize="small" color="primary"></Cancel>
        </IconButton>
      </Box>
    </Modal>
  );
};

export default AlterarLivro;
