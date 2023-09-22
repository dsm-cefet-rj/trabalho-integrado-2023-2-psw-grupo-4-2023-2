import React from 'react'
import './DadosDoUsuario.css'
import imagem from "../../assets/img/imagem-usuario.jpeg";

const DadosDoUsuario = () => {
  return (
    <section>
        <div className='section-DadosDoUsuario'>
            <div className='conteiner-DadosDoUsuario'>
                <h1>Meus Dados</h1>
                <div className='card-Dados meus-dados'>
                    <div>
                        <img src={imagem}>
                        </img>
                    </div>
                    <div>
                        <h3>Thiago Conceiçao  de souza</h3>
                        <h4>thiagosouza@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div className='conteiner-DadosDoUsuario'>
                <h2>Assinatura e pagamentos</h2>
                <div className='card-Dados'>
                    <div className='linha-dados'>
                        <i class='bx bxs-calendar-alt'></i>
                        <p>Data de cobrança: 09/10/22</p>
                    </div>
                    <div className='linha-dados'>
                        <i class='bx bx-credit-card-alt' ></i>
                        <p>Pagamento: Débito</p>
                    </div>
                </div>
            </div>
            <div className='conteiner-DadosDoUsuario'>
                <h2>Informações pessoais</h2>
                <div className='card-Dados'>
                    <p>Nome: Thiago Conceiçao  de souza</p>
                    <p>Email: thiagosouza@gmail.com</p>
                    <p>Celular: +55 (21) 9387-4293</p>
                    <p>Endereço: Av. maracanã</p>
                </div>
            </div>
            <button className='button-finalizar-sessao'>Finalizar sessão</button>
        </div>
       
    </section>
    
  )
}

export default DadosDoUsuario