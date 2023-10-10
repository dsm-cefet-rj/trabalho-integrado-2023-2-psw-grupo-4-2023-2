import { Box } from "@mui/material";
import React, { useContext } from "react";
import Carousel from "../Carousel/Carousel";
import Livro from "../Livro/Livro";
import { useLivros } from "../../hooks/useLivros";

const Sugestao = () => {
  const { colecao, pesquisados } = useLivros();

  const acervo = pesquisados?.length ? pesquisados : colecao;

  return (
    <>
      {acervo ? (
        <Box paddingTop={4}>
          <Carousel titulo={"Sugestões de Livros"}>
            {acervo.map((data, index) => (
              <Livro
                key={index}
                data={data}
              />
            ))}
          </Carousel>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sugestao;
