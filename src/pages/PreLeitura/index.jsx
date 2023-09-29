import React from "react";
import DescricaoLivro from "../../components/DescricaoLivro/DescricaoLivro";
import Voltar from "../../components/Voltar/Voltar";
import { useParams } from "react-router-dom";
import { LivrosContext } from "../../contexts/Livros";
import { useContext } from "react";
import Livro from "../../components/Livro/Livro";
import { Box, Typography, Button, Paper } from "@mui/material";
import "./PreLeitura.css"; 

const PreLeitura = () => {
  const { livros } = useContext(LivrosContext);
  const { id } = useParams();
  const livroData = livros.find((livro) => livro.id === id);

  const namePdf = String(livroData.pdf).slice(0, -4);

  return (
    <div className="pre-leitura-container">
      <Voltar />

      <Paper elevation={3} className="livro-info">
        <Livro
          id={livroData.id}
          titulo={livroData.name}
          autor={livroData.descricao}
          urlImage={livroData.url}
        />

        <div className="buttons">
          <Button variant="contained" color="primary">
            Ler Agora
          </Button>
          <Button variant="outlined" color="primary">
            Baixar PDF
          </Button>
        </div>
      </Paper>

      <Paper elevation={3} className="descricao-livro">
        <Typography variant="body1" className="sinopse">
          {livroData.sinopse}
        </Typography>
        <Typography variant="body1" className="autor">
          {livroData.descricao}
        </Typography>
        <Typography variant="body1" className="genero">
          Gênero: {livroData.genero}
        </Typography>
      </Paper>
    </div>
  );
};

export default PreLeitura;
