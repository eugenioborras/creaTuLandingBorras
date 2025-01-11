import "../productCard/productCard.css";
export const ProductCard = (props) => {
  return (
    <div className="productCardContainer">
      <h2>{props.saludo}</h2>
      <h3>{props.nombre}</h3>
      <h3>{props.precio}</h3>
      <h3>{props.talle}</h3>
    </div>
  );
};
