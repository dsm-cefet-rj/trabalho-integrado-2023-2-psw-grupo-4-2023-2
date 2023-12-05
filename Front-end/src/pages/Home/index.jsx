import { Divider } from "@mui/material";
import Sugestao from "../../components/Sugestao/Sugestao";
import ContinueLendo from "../../components/ContinueLendo/ContinueLendo";
import Favoritos from "../../components/Favoritos/Favoritos";


const Home = () => {
    return (
        <>
            <Sugestao></Sugestao>
            <Divider variant="middle" />
            <ContinueLendo></ContinueLendo>
            {/* <Divider variant="middle" /> */}
            {/* <Favoritos></Favoritos> */}
        </>
    );
}

export default Home;   