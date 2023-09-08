import "./css/aside.css"
import "./css/favorite-list.css"
import "./css/footer.css"
import "./css/layout.css"
import "./css/main.css"
import "./css/navbar.css"
import "./css/read-pdf.css"
import "./css/reading.css"
import "./css/style.css"
import "./css/suggestions.css"
import "./js/mobile-navbar.js"

import logo from "../../assets/img/logo.png"
import Header from "../Header"



const Site = () => {
  return (
    <>
      <aside className="sidebar">
        <figure>
          <img id="logo-aside" src={logo} alt="logo LeiaMais" />
          <p>LeiaMais</p>
        </figure>
        <nav>
          <ul id="nav-list-sidebar">
            <p className="aside-text">Descubra seu livro</p>
            <li>
              <a className="aside-text" href="/">
                <i className="bx bx-home-alt"></i>Início
              </a>
            </li>
            <li>
              <a className="aside-text" href="/">
                <i className="bx bx-library"></i>Acervo
              </a>
            </li>
            <p className="aside-text">Seu Acervo</p>
            <li>
              <a className="aside-text" href="/">
                <i className="bx bx-heart"></i>Minhas Listas
              </a>
            </li>
            <li>
              <a className="aside-text" href="/">
                <i className="bx bx-book-reader"></i>Continuar Lendo
              </a>
            </li>
            <li>
              <a className="aside-text" href="/">
                <i className="bx bx-rotate-left"></i>Livros Lidos
              </a>
            </li>
            <li>
              <a className="aside-text" href="/">
                <i className="bx bx-home-alt"></i>Relatório do Usuário
              </a>
            </li>
          </ul>
        </nav>
      </aside>



      <main>
        <Header />
        <section id="suggestions">
            <div className="container">
                <h1>Sugestões de Leitura</h1>
                <div className="flex justify-center">
                    <figure>
                        <a href="leitura.html"><img src="img/livro-fogo-e-sangue.svg" alt="imagem LeiaMais" /></a>
                    </figure>
                </div>
                <div className="flex justify-center gap-10">
                    <div className="bx bx-chevron-left icon"></div>
                    <div className="bx bx-chevron-right icon"></div>
                </div>
                <div className="flex colummn align-center">
                    <h2 className="yellow-light">Fogo & Sangue - Volume 1</h2>
                    <p>Edição Português por George R. R. Martin (Autor), 
                        Alceu Chiesorin Nunes (Arte de Capa), 
                        Doug Wheatley (Ilustrador), Leonardo Alves; 
                        Regiane Winarski (Tradutor)
                    </p>
                </div>
            </div>
        </section>
        

        <section id="reading">
            <div className="container">
                <h1 className="blue-dark">Continue Lendo</h1>
                <div className="flex colummn align-center">
                    <h5 className="yellow-light">Você ainda não está lendo nenhum livro...</h5>
                    <figure>
                        <img src="img/gatinho-triste.png" alt="" />
                    </figure>
                </div>
            </div>
        </section>

        <section id="favorite-list">
            <div className="container">
                <a className="red-dark" href="/">ver todos</a>
                <h1 className="blue-dark">Sua lista Favorita </h1>
                <div className="flex colummn align-center">
                    <h5 className="yellow-light">Sua prateleira ainda não possui livros.</h5>
                    <figure>
                        <img src="img/prateleira-vaiza.png" alt="" />
                    </figure>
                </div>
            </div>
        </section>
    </main>

    <footer className="footer">
        <div className="flex colummn align-center">
            <figure >
                <img className="logo-footer" src="img/logo.svg" alt="logo LeiaMais" />
            </figure>
            <p>Desvende Mundos: onde cada página é uma Nova Aventura!</p>
        </div>
    </footer>

    </>
  );
};


export default Site;
