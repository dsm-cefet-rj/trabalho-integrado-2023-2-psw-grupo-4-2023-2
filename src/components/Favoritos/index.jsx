import "./Favoritos.css";
import "../ContinueLendo/ContinueLendo.css";
import { useEffect, useState, useRef } from 'react';
import "../ContinueLendo/ContinueLendo.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { yellow } from "@mui/material/colors";
import ListaVazia from "../MinhaLista/ListaVazia";
import gatinhotriste from "../../assets/img/gatinho-triste.png";
const Favoritos = () => {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  const [itemsPerSlide, setItemsPerSlide] = useState(4); // Inicialmente, exiba 4 itens por slide

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
  
    // Registre um ouvinte de redimensionamento para atualizar o número de itens com base no tamanho da tela
    window.addEventListener("resize", updateItemsPerSlide);
  
    // Chame a função inicialmente para definir o número correto com base no tamanho da tela inicial
    updateItemsPerSlide();
  
    // Remova o ouvinte de redimensionamento quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []);
  


  useEffect(() => {
    fetch('http://localhost:3000/favoritos')
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

  if (!data || !data.length) return (
    <>  
      <div className="section-title-continue-lendo">
        <Link to={`/MeusFavoritos`} >
          <h1>Favoritos</h1>
        </Link>
        <i class="bx bx-chevron-right"></i>
      </div>
      <div className="container-lista-vazia">
        <h2>Você não tem nenhum favotiro ainda!</h2>
        <img src={gatinhotriste} alt="gatinho-triste" width="100vh" height="100vh"/>
      </div>
    </>
  );
  const linkStyle = {
    marginLeft: "1rem",
    textDecoration: "none",
    color: "#E6B33D"
  };

  return (
    // <div className="continue-lendo">
    //   <div className="section-title">
    //     <h1>Continue Lendo</h1>
    //     <i class="bx bx-chevron-right"></i>
    //   </div>

    //   <div className="box">
    //     <div className="box-item">
    //       <i className='bx bx-x close'></i>
    //       <div className="imagem-continue-lendo">
    //         <img  src={imgLivro} alt="" />
    //       </div>
    //       <h6 className="texto-continue-lendo">lorem ipsum</h6>
    //     </div>
    //   </div>
    // </div>

    <div className="continue-lendo">
      <div className="section-title-continue-lendo">
        <Link to={`/MeusFavoritos`} >
          <h1>Favoritos</h1>
        </Link>
        <i class="bx bx-chevron-right"></i>
      </div>

      <div className="container-continue-lendo">
        <div className="carousel-continue-lendo" ref={carousel}>
          {data.map((item) => {
            const { id, image, name } = item;
            return (
              <div
                className="item-continue-lendo"
                key={id}
                style={{ flex: `0 0 calc(100% / ${itemsPerSlide} - 32px)` }}
              >
                <div className="imagem-continue-lendo">
                  <img
                    src={require("/src/assets/img/livros/" + image)}
                    alt={image}
                  />
                </div>
                <div className="texto-icon">
                  <Link to= {`/PreLeitura/${id}`} style={linkStyle}>
                    <h5 className="name">{name}</h5>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="voltar-passar-continue-lendo">
          <i onClick={handleLeftClick}>
            <AiOutlineLeft />
          </i>
          <i onClick={handleRightClick}>
            <AiOutlineRight />
          </i>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="favoritos">
  //     <div className="section-title">
  //       <h1>Meus favoritos</h1>
  //       <i class="bx bx-chevron-right"></i>
  //     </div>

  //     <div className="box">
  //       <i class="bx bx-dots-vertical-rounded"></i>
  //       <div className="box-item">
  //         <h6 className="texto-favoritos">Matheus</h6>
  //         <div className="info">
  //           <span>0 item</span>
  //           <span>|</span>
  //           <span>Atualizado em 21 ago 2023</span>
  //         </div>
  //         <div className="menu-suspenso-favoritos">
  //           <ul>
  //             <li>Renomar Lista</li>
  //             <li>Deletar Lista</li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

};

export default Favoritos;
