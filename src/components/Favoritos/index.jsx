import "./Favoritos.css";
import imgLivro from "../../assets/img/livros/livr-o-feiticeiro-de-terramar.jpg";

const Favoritos = () => {
  return (
    <div className="favoritos">
      <div className="section-title">
        <h1>Minhas Listas</h1>
        <i class="bx bx-chevron-right"></i>
      </div>

      <div className="box">
        <div className="box-item">
          <i className='bx bx-x close'></i>
          <div className="imagem-favoritos">
            <img  src={imgLivro} alt="" />
          </div>
          <h6 className="texto-favoritos">lorem ipsum</h6>
        </div>
      </div>
    </div>
  );
};

export default Favoritos;