import { createContext, useState } from "react";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isInCart = cart.some((elemento) => elemento.id === product.id);
    if (isInCart) {
      toast.error("Producto Repetido ", {
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
    } else {
      setCart([...cart, product]);
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
    }
  };
  const removeCart = () => {
    setCart([]);
  };
  const removeById = (id) => {
    const updateCart = cart.filter((elemento) => elemento.id !== id);
    setCart(updateCart);
  };
  const getTotalAmount = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };
  const totalElements = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    removeCart,
    removeById,
    getTotalAmount,
    totalElements,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
