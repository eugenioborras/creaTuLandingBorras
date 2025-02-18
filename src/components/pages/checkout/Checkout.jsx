import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalAmount, removeCart } = useContext(CartContext);
  const [ticket, setTicket] = useState(null);
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
  });

  const comprar = (event) => {
    event.preventDefault();
    let total = getTotalAmount();
    let order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };
    let ordersColection = collection(db, "orders");

    const newOrder = addDoc(ordersColection, order);
    newOrder.then((res) => setTicket(res.id));
    removeCart();

    let productCollection = collection(db, "products");

    order.items.forEach((elemento) => {
      let refDoc = doc(productCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });
  };
  const capturarDatos = () => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <div>
      {ticket ? (
        <h3>Tu comprobante es: {ticket}</h3>
      ) : (
        <form onSubmit={comprar} className="checkContainer">
          <TextField
            margin="dense"
            label="Outlined"
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={capturarDatos}
            size="small"
          />
          <TextField
            margin="dense"
            type="text"
            placeholder="Telefono"
            name="telefono"
            onChange={capturarDatos}
            size="small"
          />
          <TextField
            margin="dense"
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={capturarDatos}
            size="small"
          />
          <TextField
            margin="dense"
            type="text"
            placeholder="Dirección"
            name="direccion"
            onChange={capturarDatos}
            size="small"
          />
          <Button
            variant="contained"
            color="success"
            size="small"
            type="submit"
          >
            Comprar
          </Button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
