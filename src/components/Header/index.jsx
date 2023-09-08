import "./Header.css";
import logo from "../../assets/img/logo.png"
import Navbar from "../Navbar";
import { useState } from "react";

const Header = () => {
  return (
    <header>
      <Navbar/>
      <div className="logo-text">
        <img src={logo} alt="Logo leiaMais" />
        <h6>LeiaMais</h6>
      </div>
      <i className="bx bx-search"></i>
      <div>
        <i className="bx bxs-user-circle"></i>
        <i className="bx bx-chevron-down"></i>
      </div>
    </header>
  );
};

export default Header;
