import { useEffect, useState, useRef } from 'react';
import "./Sugestao.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Sugestao = () => {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/livros.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <section>
      <div className="section-title">
        <h1>Sugestão de Leitura</h1>
        <i class="bx bx-chevron-right"></i>
      </div>

      <div className="container"> 
        <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, image, name, descricao} = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={require("/src/assets/img/livros/"+image)} alt={image} />
              </div>
              <div className="info">
                <div className="bookmark">
                <h5 className="name">{name}</h5>
                <i class='bx bxs-bookmark-heart'></i>
                </div>
                <p className="descricao">{descricao}</p>
              </div>
            </div>
          );
        })}
        </div>
        
        <div className="voltar-passar">
          <i onClick={handleLeftClick}>
            <AiOutlineLeft />
          </i>
          <i onClick={handleRightClick}>
            <AiOutlineRight />
          </i>
        </div>
      </div>
    </section>
  );
};

export default Sugestao;
