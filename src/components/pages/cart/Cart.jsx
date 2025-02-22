import { Link } from "react-router";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

            <Button
              variant="contained"
              color="warning"
              size="small"
              onClick={() => {
                removeById(product.id);
                toast.success("Producto Eliminado", {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition: Bounce,
                });
              }}
            >
              X
            </Button>
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};
