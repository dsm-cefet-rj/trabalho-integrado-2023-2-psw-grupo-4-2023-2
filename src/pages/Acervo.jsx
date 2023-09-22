import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SugestaoVariant1 from "../components/Sugestao/SugestaoVariant1";

const Acervo = ({livros}) => {

    const [openedNavbar, setOpenedNavbar] = useState(false);
    const userName = "Renan";
  return (
    <>
    <Navbar
      openedNavbar={openedNavbar}
      closeNavbar={() => setOpenedNavbar(false)}
    />
    <Main>
      <Header showNavbar={() => setOpenedNavbar(true)} userName={userName}/>
      <SugestaoVariant1 livros={livros} />
      <Footer />
    </Main>
    </>
  )
}

export default Acervo;