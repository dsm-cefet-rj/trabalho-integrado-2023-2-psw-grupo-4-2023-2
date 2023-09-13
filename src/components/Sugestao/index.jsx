import "./Sugestao.css";
import imgLivro from "../../assets/img/livro-fogo-e-sangue.svg"
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Sugestao = () => {
    return (
        <section>
            <h1>Sugestão de Leitura</h1>
            <img src={imgLivro} />
            <div>
                <i><AiOutlineLeft /></i>
                <i><AiOutlineRight /></i>
            </div>
            <h2 className="color-text">Fogo & Sangue – Volume 1</h2>
            <p>Edição Português por George R. R. Martin (Autor)
                , Alceu Chiesorin Nunes (Arte de Capa)
                , Doug Wheatley (Ilustrador), Leonardo Alves; 
                Regiane Winarski (Tradutor)
            </p>
        </section>

    )
}

export default Sugestao
