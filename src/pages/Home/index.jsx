import { Divider } from "@mui/material";
import Sugestao from "../../components/Sugestao/Sugestao";
import ContinueLendo from "../../components/ContinueLendo/ContinueLendo";


const Home = () => {
    return (
        <>
            <Sugestao></Sugestao>
            <Divider variant="middle" />
            <ContinueLendo></ContinueLendo>
        </>
    );
}

export default Home;