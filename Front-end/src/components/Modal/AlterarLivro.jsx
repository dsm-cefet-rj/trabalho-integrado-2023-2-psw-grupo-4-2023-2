import {
  Box,
  Button,
  Container,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useControlador } from "../../hooks/useControlador";
import { useState } from "react";

const AlterarLivro = () => {
  const { openModal, setOpenModal } = useControlador();

  const [imagem, setImagem] = useState();

  const carregaImagem = async (e) => {
    e.preventDefault();
    console.log("carregaImagem");
    console.log(imagem);
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
        <Typography>Carregue a imagem:</Typography>
        <form onSubmit={carregaImagem}>
        <input
          type="file"
          autoComplete="off"
          onChange={(e) => setImagem(e.target.files[0])}
        />
        <Button type="submit" variant="contained" color="error">
          Salvar
        </Button>
      </form>
        <Stack
          direction={{ md: "row" }}
          justifyContent={"space-around"}
          marginTop={2}
        ></Stack>
      </Box>
    </Modal>
  );
};

export default AlterarLivro;
