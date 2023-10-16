import {
  Box,
  Button,
  Container,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useControlador } from "../../hooks/useControlador";

const AlterarLivro = () => {
  const { openModal, setOpenModal } = useControlador();

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

        </Box>
    </Modal>
  );
};

export default AlterarLivro;
