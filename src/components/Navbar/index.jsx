import { LiaTimesSolid } from "react-icons/lia";
import "./Navbar.css";
import logo from "../../assets/img/logo.png";

const Navbar = ({openedNavbar, closeNavbar}) => {

  return (
      <nav className={openedNavbar && "show"}>
        <div className="logo-navbar" href="/#">
          <img src={logo} alt="Logo leiaMais" />
          <h6>LeiaMais</h6>
        </div>
        <h6>Descubra seu livro</h6>
        <a href="/#"><i class='bx bx-home-alt'></i>Início</a>
        <a href="/#"><i class='bx bx-library'></i>Acervo</a>
        <h6>Seu Acervo</h6>
        <a href="/#"><i class='bx bx-heart'></i>Minhas Listas</a>
        <a href="/#"><i class='bx bx-book-reader'></i>Continuar Lendo</a>
        <a href="/#"><i class='bx bx-rotate-left'></i>Livros Lidos</a>

        <button onClick={closeNavbar} className="nav-btn nav-close-btn">
          <LiaTimesSolid />
        </button>
      </nav>
  );
};

export default Navbar;
