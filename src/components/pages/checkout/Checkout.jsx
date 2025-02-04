import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
  });
  const comprar = (event) => {
    event.preventDefault();
    console.log(userInfo);
  };
  const capturarDatos = () => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <div className="checkContainer">
      <form onSubmit={comprar}>
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
        <Button variant="contained" color="success" size="small" type="submit">
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
