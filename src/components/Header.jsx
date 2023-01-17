import { useContext} from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import { ContextApp } from "../Context/ContextApp";
import "./styles/Header.css";

const Header = () => {
  const {hamburger, capa} = useContext(ContextApp)

  return (
    <header>
      <Link to={"/"}>
      <Logo />

      </Link>

      <div
        ref={hamburger}
        onClick={(e) => {
          hamburger.current.classList.toggle("open");
          capa.current.classList.toggle("capa-act")
          
        }}
        className="icon nav-icon-1 "
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
