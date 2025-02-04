import { PiShoppingCartSimpleBold } from "react-icons/pi";
import "./cartWidget.css";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div className="cartContainer">
      <Link to="/cart">
        <Badge badgeContent={0} color="primary" showZero>
          <PiShoppingCartSimpleBold size="1.5em" />
        </Badge>
      </Link>
    </div>
  );
};
