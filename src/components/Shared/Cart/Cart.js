import "./Cart.scss";
import Incrementer from "../Incrementer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items } = useSelector((state) => state.items);
  const { item, count } = items;
  const { cartItems } = useSelector((state) => state.cart);
  console.log("Cart Items", cartItems);
  return (
    <div className="cart-bg">
      <div className="cart-headers">
        <h6>Cart ({count})</h6>
        <p>Remove All</p>
      </div>
      <div className="cart-items">
        {cartItems.length > 1 ? (
          cartItems.map((item, itemIdx) => {
            return (
              <div className="cart-item" key={itemIdx}>
                <div className="cart-image-title">
                  <img
                    className="cart-item-image"
                    src={item.item.image.mobile}
                    alt="cart-item"
                  />
                  <div>
                    <h6>{item.item.name.split(` Headphones`)}</h6>
                    <p>${item.item.price}.00</p>
                  </div>
                </div>
                <Incrementer />
              </div>
            );
          })
        ) : (
          <div className="cart-item">
            <div className="cart-image-title">
              <img
                className="cart-item-image"
                src={item.image.mobile}
                alt="cart-item"
              />
              <div>
                <h6>{item.name.split(` Headphones`)}</h6>
                <p>${item.price}.00</p>
              </div>
            </div>
            <Incrementer />
          </div>
        )}

        {/* {items.map((item) => {
          return (
            <div>
              <div>{item.image.desktop}</div>
              <div>
                <h6>{item.name}</h6>
                <p>{item.price}</p>
              </div>
              <Incrementer />
            </div>
          );
        })} */}

        {/* <div className="cart-item">
          <div className="cart-image-title">
            <img
              className="cart-item-image"
              src={item.image.mobile}
              alt="cart-item"
            />
            <div>
              <h6>{item.name.split(` Headphones`)}</h6>
              <p>${item.price}.00</p>
            </div>
          </div>
          <Incrementer />
        </div> */}
      </div>

      <div className="cart-headers">
        <h6>Total</h6>
        <p>$$$</p>
      </div>
      <Link to="/checkout" target="_top">
        <button>Checkout</button>
      </Link>
    </div>
  );
};
export default Cart;
