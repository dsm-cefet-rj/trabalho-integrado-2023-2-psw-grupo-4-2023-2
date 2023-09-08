import "./Header.css";
import { FaBars } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";

import logo from "../../assets/img/logo.png";

const Header = ({ showNavbar }) => {
  return (
    // <header>

    // </header>

    <header>
      <button onClick={showNavbar} className="nav-menu">
        <FaBars />
      </button>
      <div className="logo-text" href="/#">
        <img src={logo} alt="Logo leiaMais" />
        <h6>LeiaMais</h6>
      </div>
      {/* <i className="bx bx-search"></i> */}
      <button className="nav-search">
        <BsSearch />
      </button>
      <button className="nav-user">
        <FaCircleUser />
      </button>

      {/* <div>
        <i className="bx bxs-user-circle"></i>
        <i className="bx bx-chevron-down"></i>
      </div> */}
    </header>
  );
};

export default Header;
