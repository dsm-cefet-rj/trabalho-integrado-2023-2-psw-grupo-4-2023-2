import "./Header.css";
import { FaBars } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";

import logo from "../../assets/img/logo.png";

const Header = ({ showNavbar }) => {
  return (
    <header>
      <button onClick={showNavbar} className="nav-menu">
        <FaBars />
      </button>

      <div className="logo-header" href="/#">
        <img src={logo} alt="Logo leiaMais" />
        <h6>LeiaMais</h6>
      </div>

      <button className="nav-search">
        <BsSearch />
      </button>

      <div className="pesquisar-livro">
        <i className="bx bx-search"></i>
        <input
          className="campo"
          type="text"
          placeholder="Digite o nome do livro ou autor(a) ou gênero"
        />
      </div>

      <div className="usuario">
        <button className="nav-user">
          <FaCircleUser />
        </button>
        <span>Renan</span>
        <i className="bx bxs-down-arrow"></i>
      </div>
    </header>
  );
};

export default Header;
