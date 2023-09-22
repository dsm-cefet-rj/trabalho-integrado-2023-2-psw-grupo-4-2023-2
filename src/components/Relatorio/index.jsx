import React from 'react'
import './Relatorio.css'
import imagem from "../../assets/img/imagem-relatorio.png"

const DadosDoUsuario = () => {
  return (
    <section>
        <div className='section-relatorio'>
        <h1>Relatório Leia Mais</h1>
            <div className='total-relatorio'>
                
                <img src={imagem}> 
                </img>
                <h2>Você leu 42 livros esse ano.</h2>
                <h2>Parabéns</h2>
            </div>
            <div className='generos-relatorio'>
                <h1>Você leu:</h1>
                <div className='genero-livros'>
                    <h2>Romance: 32 livros</h2>
                    <div className='cem-porcento'>
                        <div className='porcentagem romance'>76%</div>
                    </div>
                </div>
                <div className='genero-livros'>
                    <h2>Terror: 6 livros</h2>
                    <div className='cem-porcento'>
                        <div className='porcentagem terror'>14%</div>
                    </div>
                </div>
                <div className='genero-livros'>
                    <h2>Suspense: 4 livros</h2>
                    <div className='cem-porcento'>
                        <div className='porcentagem suspense'>10%</div>
                    </div>
                </div>
            </div>

        </div>


       


    </section>
    
  )
}

export default DadosDoUsuario