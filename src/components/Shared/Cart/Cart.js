import "./Cart.scss";
import Incrementer from "../Incrementer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items } = useSelector((state) => state.items);
  const { itemCount } = items;
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice.totalPrice);
  const isGlobal = false;

  console.log(totalPrice);

  console.log("Cart Items", cartItems);
  return (
    <div className="cart-bg">
      <div className="cart-headers">
        <h6>Cart ({itemCount})</h6>
        <p>Remove All</p>
      </div>
      <div className="cart-items">
        {cartItems.length > 1 ? (
          cartItems.map((cartItem, itemIdx) => {
            return (
              <div className="cart-item" key={itemIdx}>
                <div className="cart-image-title">
                  <img
                    className="cart-item-image"
                    src={cartItem.item.image.mobile}
                    alt="cart-item"
                  />
                  <div>
                    <h6>{cartItem.item.name.split(` Headphones`)}</h6>
                    <p>${cartItem.item.price}.00</p>
                  </div>
                </div>
                <Incrementer isGlobal={isGlobal} />
              </div>
            );
          })
        ) : (
          <div className="cart-item">
            <div className="cart-image-title">
              <img
                className="cart-item-image"
                src={cartItems[0].item.image.mobile}
                alt="cart-item"
              />
              <div>
                <h6>{cartItems[0].item.name.split(` Headphones`)}</h6>
                <p>${cartItems[0].item.price}.00</p>
              </div>
            </div>
            <Incrementer />
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
};
export default Cart;
