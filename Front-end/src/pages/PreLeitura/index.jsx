import DescricaoLivro from "../../components/DescricaoLivro/DescricaoLivro";
import Voltar from "../../components/Voltar/Voltar";
import { useParams } from "react-router-dom";
import Livro from "../../components/Livro/Livro";
import { Box } from "@mui/material";
import { useLivros } from "../../hooks/useLivros";

const PreLeitura = () => {
    const { livroSelecionado } = useLivros();

    return (
        <>
            <Voltar />
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <Livro data={livroSelecionado}/>
            </Box>

            <DescricaoLivro data={livroSelecionado}></DescricaoLivro>
        </>
    );
}

export default PreLeitura;   