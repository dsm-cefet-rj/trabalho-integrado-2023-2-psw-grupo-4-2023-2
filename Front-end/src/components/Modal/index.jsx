import { Modal as MuiModal, Typography } from "@mui/material";
import React from "react";
import AlterarLivro from "./AlterarLivro";
import ExcluirLivro from "./ExcluirLivro";
import RestaurarLivro from "./RestaurarLivro";

const Modal = ({ variant }) => {
  switch (variant) {
    case "alterarLivro":
      return <AlterarLivro />;
    case "excluirLivro":
      return <ExcluirLivro />;
    case "restaurarLivro":
      return <RestaurarLivro />;
    default:
      return (
        <MuiModal open={false}>
          <Typography>padrao</Typography>
        </MuiModal>
      );
  }
};

export default Modal;
