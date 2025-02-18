import { ProductCard } from "../../common/productCard/ProductCard";
import "../ItemListContainer/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = productsCollection;
    if (name) {
      let porcionDeProductos = query(
        productsCollection,
        where("category", "==", name)
      );
      consulta = porcionDeProductos;
    }
    const getProducts = getDocs(consulta);
    getProducts
      .then((res) => {
        const array = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() };
        });
        setItems(array);
      })
      .catch((error) => console.log(error));
  }, [name]);

  if (items.length === 0) {
    return (
      <div className="loadingContainer">
        <Box
          sx={(theme) => ({
            mx: "auto",
            p: 1,
            m: 1,
            bgcolor: "grey.50",
            color: "grey.800",
            border: "1px solid",
            borderColor: "grey.300",
            borderRadius: 2,
            textAlign: "center",
            fontSize: "0.875rem",
            fontWeight: "700",
            ...theme.applyStyles("dark", {
              bgcolor: "#101010",
              color: "grey.300",
              borderColor: "grey.800",
            }),
          })}
        >
          <LinearProgress />
          <h1>Cargando Productos...</h1>
          <LinearProgress />
        </Box>
      </div>
    );
  }
  return (
    <>
      {/* <button onClick={agregarProductos}>Agregar productos db</button> */}
      <div className="itemContainer">
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} {...elemento} />;
        })}
      </div>
    </>
  );
};
