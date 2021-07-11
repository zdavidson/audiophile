import "./ProductCard.scss";
import { NavLink } from "react-router-dom";

const ProductCard = ({ item, flip }) => {
  return (
    <div className="product-card">
      <img src={item.image.desktop} alt="" className={flip ? "flipImg" : ""} />
      <div className={`product-text ${flip ? "flipText" : ""}`}>
        {item.new === true ? <h3>New Product</h3> : <div></div>}
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <button>
          <NavLink to={`/${item.category}/${item.slug}`}>See Product</NavLink>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
