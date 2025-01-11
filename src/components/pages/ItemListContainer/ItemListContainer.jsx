import { ProductCard } from "../../common/productCard/ProductCard";
import "../ItemListContainer/ItemListContainer.css";
export const ItemListContainer = () => {
  return (
    <div className="itemContainer">
      <h3>Nuestros Productos</h3>
      <ProductCard saludo="Hola profe, este es un saludo!!!" />
      <ProductCard nombre="Remeron B" precio="$30.000" talle="XXL" />
      <ProductCard nombre="Musculosa B" precio="$15.000" talle="M" />
      <ProductCard nombre="Rompe Viento B" precio="$50.000" talle="XL" />
      <ProductCard nombre="Pantalon Baggy B" precio="75.000" talle="L" />
    </div>
  );
};
