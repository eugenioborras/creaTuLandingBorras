import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navBar.css";
import { Link } from "react-router";

export const NavBar = () => {
  return (
    <nav className="navBarContainer">
      <Link to="/">
        <img
          className="logoB"
          src="https://res.cloudinary.com/dbjrlsprg/image/upload/v1736893991/LogoB_po5njb.jpg"
          alt=""
        />
      </Link>
      <ul className="ulContainer">
        <Link to="/category/Remeras">Remeras</Link>
        <Link to="/category/Pantalones">Pantalones</Link>
        <Link to="/category/Camperas">Camperas</Link>
      </ul>
      <CartWidget />
    </nav>
  );
};
