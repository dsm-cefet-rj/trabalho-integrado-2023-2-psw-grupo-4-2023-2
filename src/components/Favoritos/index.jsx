import "./Favoritos.css";

const Favoritos = () => {
  return (
    <div className="favoritos">
      <div className="section-title">
        <h1>Minhas Listas</h1>
        <i class="bx bx-chevron-right"></i>
      </div>

      <div className="box">
        <i class="bx bx-dots-vertical-rounded"></i>
        <div className="box-item">
          <h6 className="texto-favoritos">Matheus</h6>
          <div className="info">
            <span>0 item</span>
            <span>|</span>
            <span>Atualizado em 21 ago 2023</span>
          </div>
          <div className="menu-suspenso-favoritos">
            <ul>
              <li>Renomar Lista</li>
              <li>Deletar Lista</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favoritos;
