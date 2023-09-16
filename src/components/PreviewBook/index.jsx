import React from 'react'
import "./PreviewBook.css";
import {Link} from "react-router-dom";
import imagem from "../../assets/img/livros/livro-fogo-e-sangue.jpg";
import {RiPlayCircleFill} from "react-icons/ri";
import {IoListCircle} from "react-icons/io5";


const index = () => {
  return (
    <section>
        <div className="section-title">
            <Link to={`/`}>
                <h1>Voltar</h1>
                
            </Link>
            <i class="bx bx-chevron-right"></i>
        </div>
        <div className='book-information'>
            <div className="image-book">
                <Link>
                    <img src={imagem} alt="Livro" width="270vh" height="400vh"/>
                </Link>
            </div>
            <div className='description'>
                <h2 className='titulo'>Fogo & Sangue - Volume 1</h2>
                <p className>Edição Português por George R. R. Martin (Autor), Alceu Chiesorin Nunes (Arte de Capa), Doug Wheatley (Ilustrador), Leonardo Alves; Regiane Winarski (Tradutor)</p>
            </div>
        </div>
        <div className='options'>
            <button className='button-list'><RiPlayCircleFill/></button>
            <button className='button-list'><IoListCircle/></button>
        </div>
    </section>
  )
}

export default index