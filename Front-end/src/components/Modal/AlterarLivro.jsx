import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { useControlador } from "../../hooks/useControlador";
import { useState } from "react";
import { Cancel } from "@mui/icons-material";

const AlterarLivro = () => {
  const data = [
    {
      label: "url da imagem",
      type: "url",
      placeholder: "Coloque o link da imagem",
    },
    {
      label: "titulo",
      type: "text",
      placeholder: "titulo do livro",
    },
    {
      label: "autor",
      type: "text",
      placeholder: "Autores",
    },
  ];

  const { openModal, setOpenModal } = useControlador();

  const [values, setValues] = useState(() => {
    return data.map(() => "");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
