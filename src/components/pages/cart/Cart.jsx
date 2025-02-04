import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const Cart = () => {
  return (
    <div className="cartContainer">
      <Button variant="contained" color="success" size="small">
        <Link to="/checkout"> Realizar compra</Link>
      </Button>
    </div>
  );
};
