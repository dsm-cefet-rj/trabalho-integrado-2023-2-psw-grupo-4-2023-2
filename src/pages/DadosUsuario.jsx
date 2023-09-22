import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DadosDoUsuario from "../components/DadosDoUsuario";

const PreLeitura = () => {

    const [openedNavbar, setOpenedNavbar] = useState(false);
    return (
        <>
        <Navbar
            openedNavbar={openedNavbar}
            closeNavbar={() => setOpenedNavbar(false)}
        />
        <Main>
            <Header showNavbar={() => setOpenedNavbar(true)} />
            <DadosDoUsuario />
            <Footer />
        </Main>
        </>

    )
}

export default PreLeitura