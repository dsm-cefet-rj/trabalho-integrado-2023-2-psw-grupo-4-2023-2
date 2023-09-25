import Sugestao from "../../components/Sugestao/Sugestao";
import DescricaoLivro from "../../components/DescricaoLivro/DescricaoLivro";
import Voltar from "../../components/Voltar/Voltar";
import { useParams } from "react-router-dom";
import { LivrosContext } from "../../contexts/Livros";
import { useContext } from "react";
import Livro from "../../components/Livro/Livro";
import { Box } from "@mui/material";



const PreLeitura = () => {
    const { livros } = useContext(LivrosContext);
    const { id } = useParams();
    const livroData = livros.find(livro => livro.id === id)

    const namePdf = String(livroData.pdf).slice(0,-4);

    return (
        <>
            <Voltar />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Livro id={livroData.id} titulo={livroData.name} autor={livroData.descricao} urlImage={livroData.url} />
            </Box>

            <DescricaoLivro sinopse={livroData.sinopse} desc={livroData.descricao}  namePdf={namePdf}></DescricaoLivro>
        </>
    );
}

export default PreLeitura;   