import Carousel from "../../components/Carousel/Carousel";
import Livro from "../../components/Livro/Livro";


const Home = () => {
    return (
        <Carousel slidesPerView={4} spaceBetween={16}>
            <Livro urlImage={'https://picsum.photos/256/350'} />
            <Livro urlImage={'https://picsum.photos/256/350'} />
            <Livro urlImage={'https://picsum.photos/256/350'} />
            <Livro urlImage={'https://picsum.photos/256/350'} />
            <Livro urlImage={'https://picsum.photos/256/350'} />
            <Livro urlImage={'https://picsum.photos/256/350'} />
            <Livro urlImage={'https://picsum.photos/256/350'} />
            <Livro urlImage={'https://picsum.photos/256/350'} />
            <Livro urlImage={'https://picsum.photos/256/350'} />
        </Carousel>
    );
}

export default Home;