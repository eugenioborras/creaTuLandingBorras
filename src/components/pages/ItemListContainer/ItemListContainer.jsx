import { ProductCard } from "../../common/productCard/ProductCard";
import "../ItemListContainer/ItemListContainer.css";
import { products } from "../../../products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    let productsFiltered = products.filter(
      (elemento) => elemento.category === name
    );
    const getProducts = new Promise((resolve, reject) => {
      resolve(!name ? products : productsFiltered);
      reject("error");
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);
  return (
    <div className="itemContainer">
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} {...elemento} />;
      })}
    </div>
  );
};
