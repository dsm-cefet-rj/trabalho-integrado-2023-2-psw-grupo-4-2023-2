import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [openedNavbar, setOpenedNavbar] = useState(false);

  return (
    <div>
      <nav className={openedNavbar ? "responsive_nav" : ""}>
        <h6>Descubra seu livro</h6>
        <a href="/#">Início</a>
        <a href="/#">Acervo</a>
        <h6>Seu Acervo</h6>
        <a href="/#">Minhas Listas</a>
        <a href="/#">Continuar Lendo</a>
        <a href="/#">Livros Lidos</a>

        <button
          className="nav-btn nav-close-btn"
          onClick={() => setOpenedNavbar(false)}
        >
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={() => setOpenedNavbar(true)}>
        <FaBars style={{ width: "100%" }} />
      </button>
    </div>
  );
};

export default Navbar;
