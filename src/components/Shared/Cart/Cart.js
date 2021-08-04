import "./Cart.scss";
import Incrementer from "../Incrementer";
import ItemDisplaySmall from "../ItemDisplaySmall";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearExistingCart } from "../../../store/cart";
import { useDispatch } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice.totalPrice);
  const isGlobal = false;
  const dispatch = useDispatch();

  console.log("Cart Items", cartItems);

  if (cartItems.length === 0) {
    return (
      <div className="cart-item">
        <ItemDisplaySmall cartItem={{ item: { name: "", image: {} } }} />
        <Incrementer isGlobal={isGlobal} individualItemCount={""} itemIdx={0} />
      </div>
    );
  } else {
    return (
      <div className="cart-bg">
        <div className="cart-headers">
          <h6>
            Cart (
            {cartItems.length > 1
              ? cartItems.map((item) => item.itemCount)
              : cartItems[0].itemCount}
            )
          </h6>
          <button
            id="remove-all-btn"
            type="button"
            onClick={() => {
              dispatch(clearExistingCart());
            }}
          >
            Remove All
          </button>
        </div>
        <div className="cart-items">
          {cartItems.length > 1 ? (
            cartItems.map((cartItem, itemIdx) => {
              return (
                <div className="cart-item" key={itemIdx}>
                  <ItemDisplaySmall cartItem={cartItem} />
                  <Incrementer
                    isGlobal={isGlobal}
                    individualItemCount={cartItem.itemCount}
                    itemIdx={itemIdx}
                  />
                </div>
              );
            })
          ) : (
            <div className="cart-item">
              <ItemDisplaySmall cartItem={cartItems[0]} />
              <Incrementer
                isGlobal={isGlobal}
                individualItemCount={cartItems[0].itemCount}
                itemIdx={0}
              />
            </div>
          )}
        </div>

        <div className="cart-headers">
          <h6>Total</h6>
          <p>${totalPrice}.00</p>
        </div>
        <Link to="/checkout" target="_top">
          <button>Checkout</button>
        </Link>
      </div>
    );
  }
};
export default Cart;
