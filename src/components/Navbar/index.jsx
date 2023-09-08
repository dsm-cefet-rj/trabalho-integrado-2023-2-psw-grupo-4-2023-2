import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";


const Navbar = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    return (
        <div>
            <nav ref={navRef}>
                <h6>Descubra seu livro</h6>
                <a href="/#">Início</a>
                <a href="/#">Acervo</a>
                 <h6>Seu Acervo</h6>
                <a href="/#">Minhas Listas</a>
                <a href="/#">Continuar Lendo</a>
                <a href="/#">Livros Lidos</a>
                <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
            </nav>
            <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>    
        </div>
    )
}

export default Navbar;