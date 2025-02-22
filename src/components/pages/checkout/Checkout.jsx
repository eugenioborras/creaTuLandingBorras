import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import Grid from "@mui/material/Grid2";

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
    <div className="contenedorCheck">
      {ticket ? (
        <h3>Tu comprobante es: {ticket}</h3>
      ) : (
        <div>
          <h3>Datos del Cliente:</h3>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor: "black",
              border: "2px solid white",
            }}
          >
            <form onSubmit={comprar}>
              <Grid size={{ xs: 12, md: 15 }}>
                <TextField
                  margin="dense"
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={capturarDatos}
                  size="small"
                  sx={{ backgroundColor: "white" }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 15 }}>
                <TextField
                  margin="dense"
                  type="text"
                  placeholder="Telefono"
                  name="telefono"
                  onChange={capturarDatos}
                  size="small"
                  sx={{ backgroundColor: "white" }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 15 }}>
                <TextField
                  margin="dense"
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  onChange={capturarDatos}
                  size="small"
                  sx={{ backgroundColor: "white" }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 15 }}>
                <TextField
                  margin="dense"
                  type="text"
                  placeholder="Dirección"
                  name="direccion"
                  onChange={capturarDatos}
                  size="small"
                  sx={{ backgroundColor: "white" }}
                />
              </Grid>
              <Grid display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  type="submit"
                  margin="dense"
                >
                  Comprar
                </Button>
              </Grid>
            </form>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Checkout;
