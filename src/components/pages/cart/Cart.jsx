import { Link } from "react-router";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";

export const Cart = () => {
  const { cart, removeCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();
  return (
    <div className="cartContainer">
      {cart.map((product) => {
        return (
          <div className="tarjeta" key={product.id}>
            <h2>{product.title}</h2>
            <h2>$: {product.price}</h2>
            <h2>Cantidad: {product.quantity}</h2>
            <img src={product.imageUrl} alt="" />
            <button onClick={() => removeById(product.id)}>Eliminar</button>
          </div>
        );
      })}
      {cart.length === 0 && <h2 className="tarjeta">Carrito Vacío!!!</h2>}
      <div className="totalContainer">
        <Button variant="contained" color="success" size="small">
          <Link to="/checkout"> Realizar compra</Link>
        </Button>
        <h3>El Total a pagar es: ${total}</h3>
        <Button
          onClick={removeCart}
          variant="contained"
          color="warning"
          size="large"
        >
          Vaciar Carrito!
        </Button>
      </div>
    </div>
  );
};
