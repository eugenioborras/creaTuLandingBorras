import { PiShoppingCartSimpleBold } from "react-icons/pi";
import "./cartWidget.css";
import Badge from "@mui/material/Badge";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { totalElements } = useContext(CartContext);
  let total = totalElements();
  return (
    <div className="cartContainer">
      <Link to="/cart">
        <Badge badgeContent={total} color="primary" showZero>
          <PiShoppingCartSimpleBold size="1.5em" />
        </Badge>
      </Link>
    </div>
  );
};
