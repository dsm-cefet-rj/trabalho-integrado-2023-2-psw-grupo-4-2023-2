import DescricaoLivro from "../../components/DescricaoLivro/DescricaoLivro";
import Voltar from "../../components/Voltar/Voltar";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
import { LivrosContext } from "../../contexts/Livros";
import { useContext } from "react";
import Livro from "../../components/Livro/Livro";
import { Box } from "@mui/material";




const PreLeitura = () => {
    const { livros } = useContext(LivrosContext);
    const { id } = useParams();
    const livroData = livros.find(livro => livro.id === id)

    const namePdf = String(livroData.pdf).slice(0,-4);
=======
import Livro from "../../components/Livro/Livro";
import { Box } from "@mui/material";
import { useLivros } from "../../hooks/useLivros";

const PreLeitura = () => {
    const { livroSelecionado } = useLivros();
>>>>>>> Json-server

    return (
        <>
            <Voltar />
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
<<<<<<< HEAD
                <Livro id={livroData.id} titulo={livroData.name} autor={livroData.descricao} urlImage={livroData.url} />
            </Box>

            <DescricaoLivro id={livroData.id}sinopse={livroData.sinopse} desc={livroData.descricao}  namePdf={namePdf} genero={livroData.genero}></DescricaoLivro>
=======
                <Livro data={livroSelecionado}/>
            </Box>

            <DescricaoLivro data={livroSelecionado}></DescricaoLivro>
>>>>>>> Json-server
        </>
    );
}

export default PreLeitura;   