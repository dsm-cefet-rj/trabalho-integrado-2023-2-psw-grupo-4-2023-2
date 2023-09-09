import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import "./Navbar.css";

const Navbar = ({openedNavbar, closeNavbar}) => {

  return (
      <nav className={openedNavbar && "show"}>
        <h6>Descubra seu livro</h6>
        <a href="/#">Início</a>
        <a href="/#">Acervo</a>
        <h6>Seu Acervo</h6>
        <a href="/#">Minhas Listas</a>
        <a href="/#">Continuar Lendo</a>
        <a href="/#">Livros Lidos</a>

        <button onClick={closeNavbar} className="nav-btn nav-close-btn">
          <LiaTimesSolid />
        </button>
      </nav>
  );
};

export default Navbar;
