import "./Incrementer.scss";
import { useSelector, useDispatch } from "react-redux";
import { increaseItems, decreaseItems } from "../../store/items";
import { increaseCartItem, decreaseCartItem } from "../../store/cart";
import { addToGlobalCount } from "../../store/globalCount";
import { addToTotal, removeFromTotal } from "../../store/totalPrice";

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
                dispatch(decreaseCartItem(itemIdx));
                dispatch(removeFromTotal(cartItems[itemIdx].item.price));
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
