import "./Cart.scss";
import Incrementer from "../Incrementer";
import ItemDisplaySmall from "../ItemDisplaySmall";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearExistingCart } from "../../../store/cart";
import { useDispatch } from "react-redux";
import { resetTotalPrice } from "../../../store/totalPrice";
import { resetCartCount } from "../../../store/cartCount";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { totalPrice } = useSelector((state) => state.totalPrice);
  const { cartCount } = useSelector((state) => state.cartCount);
  const isGlobal = false;
  const dispatch = useDispatch();

  console.log("Cart Items", cartItems);
  console.log("Cart Count", cartCount);

  if (cartItems[0].item.name === "") {
    return (
      <div className="cart-bg">
        <div className="cart-headers">
          <h6>Cart (0)</h6>
          <button
            id="remove-all-btn"
            type="button"
            onClick={() => {
              dispatch(clearExistingCart());
              dispatch(resetTotalPrice());
              dispatch(resetCartCount());
            }}
          >
            Remove All
          </button>
        </div>
        <div className="cart-items">
          <div id="empty-cart" className="cart-item">
            No Items
          </div>
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
  } else {
    return (
      <div className="cart-bg">
        <div className="cart-headers">
          <h6>Cart ({cartCount})</h6>
          <button
            id="remove-all-btn"
            type="button"
            onClick={() => {
              dispatch(clearExistingCart());
              dispatch(resetTotalPrice());
              dispatch(resetCartCount());
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
