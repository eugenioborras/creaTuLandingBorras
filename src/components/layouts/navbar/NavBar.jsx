import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navBar.css";
import logo from "../../../assets/LogoB.jpg";

export const NavBar = () => {
  return (
    <nav className="navBarContainer">
      <img className="logoB" src={logo} alt="" />
      <ul className="ulContainer">
        <li>
          <a href="">Todas</a>
        </li>
        <li>
          <a href="">Remeras</a>
        </li>
        <li>
          <a href="">Bermudas</a>
        </li>
        <li>
          <a href="">Pantalones</a>
        </li>
        <li>
          <a href="">Accesorios</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};
