import "../productCard/productCard.css";
import Button from "@mui/material/Button";
import { Link } from "react-router";

export const ProductCard = ({ imageUrl, title, price, id, stock }) => {
  return (
    <div className="productCardContainer">
      <img src={imageUrl} alt="" />
      <h3 className="title">{title}</h3>
      <h3>Precio: ${price}</h3>
      <h3>Apurate solo quedan: {stock}</h3>
      <Link to={`/detail/${id}`}>
        <Button variant="contained" color="success" size="small">
          Más info
        </Button>
      </Link>
    </div>
  );
};
