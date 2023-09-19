import React from "react";
import "./HeaderVariant1.css";

import logo from "../../assets/img/logo.png";

const HeaderVariant1 = () => {
  return (
    <>
      <div className="header-home">
        <div className="logo-variant1">
          <img src={logo} alt="logo" className="img-home" />
          <h6 className="texto-home">LeiaMais</h6>
        </div>
        <div className="botao-home">
          <button>Login</button>
          <button>Assine</button>
        </div>
      </div>
    </>
  );
};

export default HeaderVariant1;
