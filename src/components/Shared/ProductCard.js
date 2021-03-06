import "./ProductCard.scss";
import Incrementer from "./Incrementer";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, startNewCart } from "../../store/cart";
import { addToTotal } from "../../store/totalPrice";
import { resetGlobalCount } from "../../store/globalCount";
import { resetItemCount } from "../../store/items";
import { addToCartCount } from "../../store/cartCount";

const ProductCard = ({ item, flip, detail }) => {
  const { itemCount } = useSelector((state) => state.items.items);
  const { cartItems } = useSelector((state) => state.cart);
  const isGlobal = true;
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
                <Incrementer isGlobal={isGlobal} />
                <button
                  className="add-to-cart-button"
                  type="button"
                  onClick={() => {
                    if (cartItems === undefined) {
                      dispatch(startNewCart(item, itemCount));
                    } else if (cartItems[0].item.name === "") {
                      dispatch(startNewCart(item, itemCount));
                    }
                    dispatch(addToCart({ item, itemCount }));
                    dispatch(addToTotal(item.price * itemCount));
                    dispatch(addToCartCount(itemCount));
                    dispatch(resetGlobalCount());
                    dispatch(resetItemCount());
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
