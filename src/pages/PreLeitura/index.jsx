import Sugestao from "../../components/Sugestao/Sugestao";
import DescricaoLivro from "../../components/DescricaoLivro/DescricaoLivro";
import Voltar from "../../components/Voltar/Voltar";


const PreLeitura = () => {
    return (
        <>
            <Voltar />
            {/* <LivroSelecionado /> */}
            <Sugestao />
            <DescricaoLivro />
        </>
    );
}

export default PreLeitura;   