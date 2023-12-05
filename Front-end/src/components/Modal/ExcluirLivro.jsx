import {
  Box,
  Button,
  Container,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useControlador } from "../../hooks/useControlador";
import { useLivros } from "../../hooks/useLivros";
import { excluiLivro } from "../../services/livros";

const ExcluirLivro = () => {
  const { openModal, setOpenModal } = useControlador();
  const { livroSelecionado, carregaLivros } = useLivros();

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleExcluiLivro = async() => {
    handleClose()
    await excluiLivro(livroSelecionado.id);
    await carregaLivros()
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
        <Typography>Deseja excluir este Livro?</Typography>
        <Stack
          direction={{ md: "row" }}
          justifyContent={"space-around"}
          marginTop={2}
        >
          <Button onClick={handleExcluiLivro} variant="contained" color="error">
            Sim
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            Não
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ExcluirLivro;
