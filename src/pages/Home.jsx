import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sugestao from "../components/Sugestao";


const Home = () =>{
    const [openedNavbar, setOpenedNavbar] = useState(false);

    return(
        <>
        <Navbar
          openedNavbar={openedNavbar}
          closeNavbar={() => setOpenedNavbar(false)}
        />
        <Main>
          <Header showNavbar={() => setOpenedNavbar(true)} />
          <Sugestao />
        </Main>
        </>
    )
}

export default Home;