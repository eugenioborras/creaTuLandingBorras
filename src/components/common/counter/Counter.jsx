import { useContext, useState } from "react";
import "../counter/counter.css";
import { CartContext } from "../../../context/CartContext";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";

import { IconButton, Button } from "@mui/material";
import { IconContext } from "react-icons";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Counter = ({ item }) => {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (counter < item.stock) {
      setCounter(counter + 1);
    }
  };
  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const onAdd = () => {
    let cartObject = { ...item, quantity: counter };
    addToCart(cartObject);
  };
  return (
    <div>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="counterContainer">
          <IconButton onClick={restar}>
            <IoIosRemoveCircleOutline size="40px" />
          </IconButton>
          <h2>Cantidad: {counter}</h2>
          <IconButton onClick={sumar}>
            <IoIosAddCircleOutline size="40px" />
          </IconButton>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              onAdd(); //
              toast.success("Producto Agregado al Carrito", {
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
            Agregar al Carrito
          </Button>
        </div>
      </IconContext.Provider>
      <ToastContainer />
    </div>
  );
};

export default Counter;
