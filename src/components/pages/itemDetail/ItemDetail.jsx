import { useEffect, useState } from "react";
import "../itemDetail/itemDetail.css";
import { products } from "../../../products";
import { useParams } from "react-router-dom";
const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productSelected = products.find((product) => product.id === id);
    setItem(productSelected);
  }, [id]);
  return (
    <div className="productCardContainer">
      <img src={item.imageUrl} alt="" />
      <h2 className="title">{item.title}</h2>
      <h3>Precio: ${item.price}</h3>
      <h3>Descripción: {item.description}</h3>
    </div>
  );
};

export default ItemDetail;
