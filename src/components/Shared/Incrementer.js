import "./Incrementer.scss";
import { useSelector, useDispatch } from "react-redux";
import { increaseItems, decreaseItems } from "../../store/items";
import {
  increaseCartItem,
  decreaseCartItem,
  clearExistingCart,
} from "../../store/cart";
import { addToGlobalCount } from "../../store/globalCount";
import { addToTotal, removeFromTotal } from "../../store/totalPrice";
import { lowerCartCount, raiseCartCount } from "../../store/cartCount";
import { removeItemFromCart } from "../../store/cart";

const Incrementer = ({ isGlobal, itemIdx }) => {
  const { itemCount } = useSelector((state) => state.items.items);
  const { globalCount } = useSelector((state) => state.globalCount);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="incrementer-container">
      {isGlobal ? (
        <>
          <div className="minus">
            <button
              onClick={() => dispatch(decreaseItems(itemCount))}
              type="button"
            >
              -
            </button>
          </div>
          <div className="count">{globalCount}</div>
          <div className="plus">
            <button
              onClick={() => {
                dispatch(addToGlobalCount(globalCount));
                dispatch(increaseItems(itemCount));
              }}
              type="button"
            >
              +
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="minus">
            <button
              onClick={() => {
                if (
                  cartItems[itemIdx].itemCount === 1 &&
                  cartItems.length === 1
                ) {
                  dispatch(decreaseCartItem(itemIdx));
                  dispatch(removeFromTotal(cartItems[itemIdx].item.price));
                  dispatch(lowerCartCount());
                  dispatch(clearExistingCart(itemIdx));
                } else if (cartItems[itemIdx].itemCount === 1) {
                  dispatch(decreaseCartItem(itemIdx));
                  dispatch(removeFromTotal(cartItems[itemIdx].item.price));
                  dispatch(lowerCartCount());
                  dispatch(removeItemFromCart(itemIdx));
                } else {
                  dispatch(decreaseCartItem(itemIdx));
                  dispatch(removeFromTotal(cartItems[itemIdx].item.price));
                  dispatch(lowerCartCount());
                }
              }}
              type="button"
            >
              -
            </button>
          </div>
          <div className="count">{cartItems[itemIdx].itemCount}</div>
          <div className="plus">
            <button
              onClick={() => {
                dispatch(increaseCartItem(itemIdx));
                dispatch(addToTotal(cartItems[itemIdx].item.price));
                dispatch(raiseCartCount());
              }}
              type="button"
            >
              +
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Incrementer;
