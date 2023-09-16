import "./Footer.css";
import imgLogo from '../../assets/img/logo-mobile.svg'

const Footer = () => {
    return (
        <footer>
        <div className="info">
            <img className="logo-footer" src={imgLogo} alt="logo LeiaMais" />
            <p>Desvende Mundos: onde cada página é uma Nova Aventura!</p>
        </div>
    </footer>
    )
}

export default Footer;