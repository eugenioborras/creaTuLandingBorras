import { PiShoppingCartSimpleBold } from "react-icons/pi";
import "./cartWidget.css";
import Badge from "@mui/material/Badge";

export const CartWidget = () => {
  return (
    <div className="cartContainer">
      <Badge badgeContent={1} color="primary">
        <PiShoppingCartSimpleBold size="1.5em" />
      </Badge>
    </div>
  );
};
