import "../productCard/productCard.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const ProductCard = ({ imageUrl, title, price, id }) => {
  return (
    <div className="productCardContainer">
      <img src={imageUrl} alt="" />
      <h3 className="title">{title}</h3>
      <h3>Precio: ${price}</h3>
      <Link to={`/detail/${id}`}>
        <Button variant="contained" color="success" size="small">
          Más info
        </Button>
      </Link>
    </div>
  );
};
