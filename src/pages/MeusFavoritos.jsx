import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Header from '../components/Header';
import {useState} from 'react';
import MinhaLista from '../components/MinhaLista';

const MeusFavoritos = () => {
    const [openedNavbar, setOpenedNavbar] = useState(false);
    return (
        <>
        <Navbar
            openedNavbar={openedNavbar}
            closeNavbar={() => setOpenedNavbar(false)}
        />
        <Main>
            <Header showNavbar={() => setOpenedNavbar(true)} />
            <MinhaLista/>
            <Footer />
        </Main>
        </>

    )
}

export default MeusFavoritos