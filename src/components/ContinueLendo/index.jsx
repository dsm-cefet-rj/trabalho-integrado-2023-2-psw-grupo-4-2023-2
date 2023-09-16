import "./ContinueLendo.css";
import imgLivro from "../../assets/img/livros/livr-o-feiticeiro-de-terramar.jpg";

const ContinueLendo = () => {
  return (
    <div className="continue-lendo">
      <div className="section-title">
        <h1>Continue Lendo</h1>
        <i class="bx bx-chevron-right"></i>
      </div>

      <div className="box">
        <div className="box-item">
          <i className='bx bx-x close'></i>
          <div className="imagem-continue-lendo">
            <img  src={imgLivro} alt="" />
          </div>
          <h6 className="texto-continue-lendo">lorem ipsum</h6>
        </div>
      </div>
    </div>
  );
};

export default ContinueLendo;
