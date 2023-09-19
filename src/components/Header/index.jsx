import "./Header.css";
import { FaBars } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import React, { useState } from "react";

import logo from "../../assets/img/logo.png";

const Header = ({ showNavbar, userName }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


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
        <button className="nav-user" onClick={toggleMenu}>
          <FaCircleUser />
        </button>
        <span>{userName}</span>
        <i className={`bx bxs-down-arrow ${menuVisible ? "active" : ""}`} onClick={toggleMenu}></i>
        {menuVisible && (
          <div className="menu-suspenso">
            <ul>
              <li><i class='bx bx-user-circle'></i>Meu Perfil</li>
              <li><i class='bx bxs-report'></i>Relatório do Usuário</li>
              <li><i class='bx bx-exit'></i>Sair</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
