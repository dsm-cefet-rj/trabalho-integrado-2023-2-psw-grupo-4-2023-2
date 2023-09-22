import { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import "./Sugestao.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Sugestao = () => {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  const [itemsPerSlide, setItemsPerSlide] = useState(4); 

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1600) {
        setItemsPerSlide(5);
      } else if (window.innerWidth >= 1400) {
        setItemsPerSlide(4);
      } else if  (window.innerWidth >= 1024){
        setItemsPerSlide(3); 
      } else if (window.innerWidth >= 600) {
        setItemsPerSlide(2); 
      } else
        setItemsPerSlide(1);
    };
  
  
    window.addEventListener("resize", updateItemsPerSlide);
  
   
    updateItemsPerSlide();
  
    
    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []);
  


  useEffect(() => {
    fetch('http://localhost:3000/livros')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <section>
      <div className="section-title">
        <h1>Sugestão de Leitura</h1>
        <i className="bx bx-chevron-right"></i>
      </div>

      <div className="container">
        <div className="carousel" ref={carousel}>
          {data.map((item) => {
            const { id, image, name, descricao } = item;
            return (
                <div className="item" key={id} style={{ flex: `0 0 calc(100% / ${itemsPerSlide} - 32px)` }}>
                  <div className="image">
                    <img src={require("/src/assets/img/livros/" + image)} alt={image} />
                  </div>
                  <div className="info">
                    <div className="bookmark">
                      <Link to= {`/PreLeitura/${id}`} style={{textDecoration: "none"}}>
                        <h5 className="name">{name}</h5>
                      </Link>  
                      <i className='bx bxs-bookmark-heart bh-sugestao'></i>
                    </div>
                    <p className="descricao-sugestao">{descricao}</p>
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
