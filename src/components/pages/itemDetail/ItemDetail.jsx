import { useEffect, useState } from "react";
import "../itemDetail/itemDetail.css";
import { useParams } from "react-router";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    const getProduct = getDoc(productRef);
    getProduct.then((res) => setItem({ ...res.data(), id: res.id }));
  }, [id]);
  return (
    <div className="itemDetailContainer">
      <img src={item.imageUrl} alt="" />
      <h2 className="title">{item.title}</h2>
      <h3>Precio: ${item.price}</h3>
      <h3>Descripción: {item.description}</h3>
      <Counter item={item} />
    </div>
  );
};

export default ItemDetail;
