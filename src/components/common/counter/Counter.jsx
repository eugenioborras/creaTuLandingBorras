import { useContext, useState } from "react";
import "../counter/counter.css";
import { CartContext } from "../../../context/CartContext";
import { MdExposurePlus1, MdExposureNeg1 } from "react-icons/md";

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
    <div className="counterContainer">
      <button onClick={restar}>
        <MdExposureNeg1 size="20px" />
      </button>
      <h2>Cantidad: {counter}</h2>
      <button onClick={sumar}>
        <MdExposurePlus1 size="20px" />
      </button>
      <button onClick={onAdd}>agregar al carrito</button>
    </div>
  );
};

export default Counter;
