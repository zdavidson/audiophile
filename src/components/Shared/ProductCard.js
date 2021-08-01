import "./ProductCard.scss";
import Incrementer from "./Incrementer";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/items";

const ProductCard = ({ item, flip, detail }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={item.image.desktop} alt="" className={flip ? "flipImg" : ""} />
      <div className={`product-text ${flip ? "flipText" : ""}`}>
        {item.new === true ? <h3>New Product</h3> : <div></div>}
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        {detail ? (
          <div>
            <p>${item.price}.00</p>
            <div>
              <form>
                <Incrementer />
                <button
                  className="add-to-cart-button"
                  type="button"
                  onClick={() => {
                    dispatch(addToCart(item));
                  }}
                >
                  Add To Cart
                </button>
              </form>
            </div>
          </div>
        ) : (
          <button>
            <NavLink to={`/${item.category}/${item.slug}`}>See Product</NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
