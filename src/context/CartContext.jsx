import { createContext, useState } from "react";

import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isInCart = cart.some((elemento) => elemento.id === product.id);
    if (isInCart) {
      alert("repetido");
    } else {
      setCart([...cart, product]);
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
