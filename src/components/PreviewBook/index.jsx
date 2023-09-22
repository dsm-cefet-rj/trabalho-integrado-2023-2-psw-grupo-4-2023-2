import React from 'react'
import "./PreviewBook.css";
import { useParams, Link} from "react-router-dom";
// import imagem from "../../assets/img/livros/livro-fogo-e-sangue.jpg";
import {RiPlayCircleFill} from "react-icons/ri";
import {BiSolidHeartCircle} from "react-icons/bi";
import { useFetch } from "../../hooks/useFetch";

const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {id}=useParams();
    const url = "http://localhost:3000/livros/" + id;
    const urlLivros = "http://localhost:3000/favoritos";
    // eslint-disable-next-line react-hooks/rules-of-hooks
    console.log(id)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: livro, loading, error } = useFetch(url);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { httpConfig} = useFetch(urlLivros);

    const linkStyleFav = {
        margin: "1rem",
        textDecoration: "none",
        color: "white",
        background: "none",
        padding: 0
      };
    const addBook = () =>{
        const livroAdd = {
            id:livro.id,
            image:livro.image,
            name:livro.name,
            descricao:livro.descricao,
            favoritos:true
        }
        httpConfig(livroAdd,"POST")
    }
  return (
    <section>
        {livro && (
            <>
                <div className="section-title">
                    <Link to={`/user-logado`}>
                        <h1>Voltar</h1>
                    </Link>
                    <i class="bx bx-chevron-right"></i>
                </div>
                <div className='book-information'>
                    <div className="image-book">
                        <Link>
                            <img src={require("/src/assets/img/livros/" + livro.image)} alt={livro.image} width="270vh" height="400vh"/>
                        </Link>
                    </div>
                    <div className='description'>
                        <h2 className='titulo'>{livro.name}</h2>
                        <p className>{livro.descricao}</p>
                    </div>
                </div>
                <div className='options'>
                    <Link className='button-list' style={linkStyleFav}><RiPlayCircleFill/></Link>
                    <button className='button-list' onClick ={()=>addBook(livro)} ><BiSolidHeartCircle/></button>
                </div>
            </>    
        )}    
    </section>
  )
}

export default index